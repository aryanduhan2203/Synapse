[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
$path = "C:\Users\ASUS\.gemini\antigravity\brain\d36465dc-4e58-4651-ad4b-e0867adf8794\.tempmediaStorage\media_d36465dc-4e58-4651-ad4b-e0867adf8794_1779445756421.png"
$img = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($img)

# We want to find the black bar (ribbon) at the top of the browser window.
# The ribbon is black, so R, G, B are very small.
# Let's search for a horizontal segment of black pixels.
$width = $bmp.Width
$height = $bmp.Height

$found = $false
$startX = 0
$startY = 0
$endX = 0
$endY = 0

for ($y = 0; $y -lt $height; $y++) {
    for ($x = 0; $x -lt $width; $x++) {
        $pixel = $bmp.GetPixel($x, $y)
        if ($pixel.R -lt 30 -and $pixel.G -lt 30 -and $pixel.B -lt 30) {
            # Let's check if there is a horizontal black line of at least 150px starting here
            $isLine = $true
            for ($k = 0; $k -lt 150; $k++) {
                if ($x + $k -ge $width) { $isLine = $false; break }
                $p2 = $bmp.GetPixel($x + $k, $y)
                if ($p2.R -ge 30 -or $p2.G -ge 30 -or $p2.B -ge 30) {
                    $isLine = $false
                    break
                }
            }
            if ($isLine) {
                $startX = $x
                $startY = $y
                $found = $true
                break
            }
        }
    }
    if ($found) { break }
}

if ($found) {
    # Find the width of the black bar
    $w = 0
    while ($startX + $w -lt $width) {
        $p = $bmp.GetPixel($startX + $w, $startY)
        if ($p.R -ge 30 -or $p.G -ge 30 -or $p.B -ge 30) {
            break
        }
        $w++
    }
    $endX = $startX + $w
    
    # Find the height of the browser mockup
    # The browser mockup starts at startY and extends downwards. Let's find where the white background ends.
    # In the screenshot, the browser mockup has a white/light gray background.
    # Let's scan down from startY at the middle of the browser window (startX + w/2) to find where the color transitions away from white/light gray.
    $midX = [int]($startX + $w / 2)
    $endY = $height - 1
    for ($y = $startY + 10; $y -lt $height; $y++) {
        $p = $bmp.GetPixel($midX, $y)
        # Check if the pixel color is NOT white/light gray
        # The background of the browser window is mostly white (#fff) or light gray.
        # If it changes back to the deep purple background of the card (which has high R and B or specific purple hues), we stop.
        # Purple in this image: R is around 90-100, G is around 60-70, B is around 210-220 (bg-[#5d3fd3])
        # Let's check if R is around 93, G is around 63, B is around 211.
        # Specifically, if R > 60 and B > 150, it is purple.
        if ($p.R -gt 60 -and $p.B -gt 150 -and $p.G -lt 100) {
            $endY = $y
            break
        }
    }
    
    Write-Output "Found Browser Mockup:"
    Write-Output "Top-Left X: $startX"
    Write-Output "Top-Left Y: $startY"
    Write-Output "Width: $w"
    Write-Output "Height: $($endY - $startY)"
    Write-Output "Bottom-Right X: $endX"
    Write-Output "Bottom-Right Y: $endY"
} else {
    Write-Output "Could not find browser mockup coordinates."
}

$bmp.Dispose()
$img.Dispose()
