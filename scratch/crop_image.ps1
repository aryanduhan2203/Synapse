[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null
$path = "C:\Users\ASUS\.gemini\antigravity\brain\d36465dc-4e58-4651-ad4b-e0867adf8794\.tempmediaStorage\media_d36465dc-4e58-4651-ad4b-e0867adf8794_1779445756421.png"
$img = [System.Drawing.Image]::FromFile($path)
$bmp = New-Object System.Drawing.Bitmap($img)

# Crop coordinates
$x = 415
$y = 56
$w = 334
# Let's crop to height 436 (which is y=56 to y=492, the full bottom)
$h = 436

$rect = New-Object System.Drawing.Rectangle($x, $y, $w, $h)
$cropBmp = $bmp.Clone($rect, $bmp.PixelFormat)

# Make sure public/images/artune directory exists
$outDir = "C:\Synapse\public\images\artune"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

$cropBmp.Save("$outDir\browser_mockup.png", [System.Drawing.Imaging.ImageFormat]::Png)

$cropBmp.Dispose()
$bmp.Dispose()
$img.Dispose()
Write-Output "Successfully cropped and saved browser mockup to public/images/artune/browser_mockup.png"
