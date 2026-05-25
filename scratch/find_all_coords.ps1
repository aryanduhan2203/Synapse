[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$dir = "C:\Users\ASUS\.gemini\antigravity\brain\d36465dc-4e58-4651-ad4b-e0867adf8794"

# 1. Eva Social: media__1779446133560.png (784x470)
# Let's find the white browser window.
$pathEva = Join-Path $dir "media__1779446133560.png"
$imgEva = [System.Drawing.Image]::FromFile($pathEva)
$bmpEva = New-Object System.Drawing.Bitmap($imgEva)
# Search from left to right at y = 100 for the white browser background
$evaX = 0
for ($x = 200; $x -lt $bmpEva.Width; $x++) {
    $p = $bmpEva.GetPixel($x, 100)
    # The browser window has a white background (#ffffff)
    if ($p.R -eq 255 -and $p.G -eq 255 -and $p.B -eq 255) {
        $evaX = $x
        break
    }
}
$bmpEva.Dispose()
$imgEva.Dispose()

# 2. MentalWell: media__1779446156543.png (818x487)
# Let's find where the video phone mockup starts.
# The background is a green/teal gradient (approx R:2 G:169 B:113 to R:43 G:189 B:163).
# The phone mockup has a white border (R:255 G:255 B:255).
$pathMental = Join-Path $dir "media__1779446156543.png"
$imgMental = [System.Drawing.Image]::FromFile($pathMental)
$bmpMental = New-Object System.Drawing.Bitmap($imgMental)
$mentalX = 0
for ($x = 250; $x -lt $bmpMental.Width; $x++) {
    $p = $bmpMental.GetPixel($x, 200)
    if ($p.R -eq 255 -and $p.G -eq 255 -and $p.B -eq 255) {
        $mentalX = $x
        break
    }
}
$bmpMental.Dispose()
$imgMental.Dispose()

# 3. Daeem: media__1779446114169.png (1024x293)
# The logo and text are on the left. The mockups (the three phones) start in the middle.
# Let's find where the white background transition or the phone borders start.
# The background is white, but the phone mockup has a black/dark border.
# The phone mockup on the left starts around x = 300.
$pathDaeem = Join-Path $dir "media__1779446114169.png"
$imgDaeem = [System.Drawing.Image]::FromFile($pathDaeem)
$bmpDaeem = New-Object System.Drawing.Bitmap($imgDaeem)
$daeemX = 0
for ($x = 250; $x -lt $bmpDaeem.Width; $x++) {
    # Scan vertically at x to find the black border of the first phone.
    # The phone mockup border is black.
    for ($y = 20; $y -lt $bmpDaeem.Height - 20; $y++) {
        $p = $bmpDaeem.GetPixel($x, $y)
        if ($p.R -lt 50 -and $p.G -lt 50 -and $p.B -lt 50) {
            $daeemX = $x
            break
        }
    }
    if ($daeemX -gt 0) { break }
}
$bmpDaeem.Dispose()
$imgDaeem.Dispose()

# 4. Vedguru: media__1779446090174.png (817x496)
# It has two Astro Sandy cards and a phone mockup.
# The phone mockup starts on the right.
# Let's find the start of the phone mockup or crop the right half of the image.
# The background is orange/brown. The phone has a white border.
$pathVed = Join-Path $dir "media__1779446090174.png"
$imgVed = [System.Drawing.Image]::FromFile($pathVed)
$bmpVed = New-Object System.Drawing.Bitmap($imgVed)
$vedX = 0
for ($x = 400; $x -lt $bmpVed.Width; $x++) {
    $p = $bmpVed.GetPixel($x, 200)
    if ($p.R -eq 255 -and $p.G -eq 255 -and $p.B -eq 255) {
        $vedX = $x
        break
    }
}
$bmpVed.Dispose()
$imgVed.Dispose()

Write-Output "Detected X Coordinates:"
Write-Output "Eva Social browser X: $evaX"
Write-Output "MentalWell phone X: $mentalX"
Write-Output "Daeem phone X: $daeemX"
Write-Output "Vedguru phone X: $vedX"
