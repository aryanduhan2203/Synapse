[Reflection.Assembly]::LoadWithPartialName("System.Drawing") | Out-Null

$dir = "C:\Users\ASUS\.gemini\antigravity\brain\d36465dc-4e58-4651-ad4b-e0867adf8794"
$outDir = "C:\Synapse\public\images\portfolio"
if (-not (Test-Path $outDir)) {
    New-Item -ItemType Directory -Force -Path $outDir | Out-Null
}

# Define the crop specifications
$crops = @(
    @{
        File = "media__1779446090174.png" # Vedguru
        OutName = "vedguru_mockup.png"
        X = 145
        Y = 0
        W = 672
        H = 496
    },
    @{
        File = "media__1779446114169.png" # Daeem
        OutName = "daeem_mockup.png"
        X = 300
        Y = 0
        W = 724
        H = 293
    },
    @{
        File = "media__1779446133560.png" # Eva
        OutName = "eva_mockup.png"
        X = 280
        Y = 0
        W = 504
        H = 470
    },
    @{
        File = "media__1779446156543.png" # MentalWell
        OutName = "mental_mockup.png"
        X = 440
        Y = 0
        W = 378
        H = 487
    }
)

foreach ($c in $crops) {
    $path = Join-Path $dir $c.File
    $img = [System.Drawing.Image]::FromFile($path)
    $bmp = New-Object System.Drawing.Bitmap($img)
    
    $rect = New-Object System.Drawing.Rectangle($c.X, $c.Y, $c.W, $c.H)
    $cropBmp = $bmp.Clone($rect, $bmp.PixelFormat)
    
    $outPath = Join-Path $outDir $c.OutName
    $cropBmp.Save($outPath, [System.Drawing.Imaging.ImageFormat]::Png)
    
    $cropBmp.Dispose()
    $bmp.Dispose()
    $img.Dispose()
    
    Write-Output "Saved crop: $($c.OutName) at size $($c.W)x$($c.H)"
}
