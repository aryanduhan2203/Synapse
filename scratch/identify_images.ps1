[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$dir = "C:\Users\ASUS\.gemini\antigravity\brain\d36465dc-4e58-4651-ad4b-e0867adf8794"
$files = @(
    "media__1779446090174.png",
    "media__1779446114169.png",
    "media__1779446133560.png",
    "media__1779446156543.png"
)

foreach ($f in $files) {
    $path = Join-Path $dir $f
    $img = [System.Drawing.Image]::FromFile($path)
    $bmp = New-Object System.Drawing.Bitmap($img)
    
    # Let's sample a few pixels to find the dominant color (e.g. top-left corner)
    $p1 = $bmp.GetPixel(10, 10)
    $p2 = $bmp.GetPixel($bmp.Width / 2, 10)
    $p3 = $bmp.GetPixel(10, $bmp.Height / 2)
    
    Write-Output "File: $f ($($img.Width)x$($img.Height))"
    Write-Output "  Corner pixel: R:$($p1.R) G:$($p1.G) B:$($p1.B)"
    Write-Output "  Top-mid pixel: R:$($p2.R) G:$($p2.G) B:$($p2.B)"
    Write-Output "  Mid-left pixel: R:$($p3.R) G:$($p3.G) B:$($p3.B)"
    
    $bmp.Dispose()
    $img.Dispose()
}
