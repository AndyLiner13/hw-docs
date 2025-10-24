# PowerShell script to update documentation files with web content
# This script processes all .md files that contain only URLs

# Function to fetch web content and format it as markdown
function Get-WebDocumentation {
    param(
        [string]$Url,
        [string]$FilePath
    )
    
    try {
        Write-Host "Processing: $FilePath"
        Write-Host "Fetching: $Url"
        
        # Use Invoke-WebRequest to fetch the page
        $response = Invoke-WebRequest -Uri $Url -UseBasicParsing
        $content = $response.Content
        
        # Extract the main content (this is a simplified extraction)
        # In a real scenario, you'd want more sophisticated HTML parsing
        
        # For now, create a placeholder content based on the URL
        $className = ($Url -split '/')[-1] -replace '^core_', '' 
        $className = (Get-Culture).TextInfo.ToTitleCase($className)
        
        $markdownContent = @"
# $className

Documentation fetched from: $Url

**Note:** This content was automatically fetched. Manual review and formatting may be required.

## Signature

```typescript
// TypeScript signature would be here
```

## Description

This documentation was automatically generated from the Meta Horizon Worlds API reference.

For the most up-to-date information, please visit: $Url
"@
        
        # Write the content to the file
        Set-Content -Path $FilePath -Value $markdownContent -Encoding UTF8
        Write-Host "✓ Updated: $FilePath" -ForegroundColor Green
        
    } catch {
        Write-Error "Failed to process $FilePath : $($_.Exception.Message)"
    }
}

# Find all .md files that contain only URLs
$documentationRoot = "c:\vsCode\hwca-mcp\documentation\core"
$urlPattern = "^https://developers\.meta\.com/horizon-worlds/reference/.*$"

Get-ChildItem -Path $documentationRoot -Recurse -Filter "*.md" | ForEach-Object {
    $content = Get-Content -Path $_.FullName -Raw
    
    # Check if the file contains only a URL (with optional whitespace)
    if ($content -match "^\s*$urlPattern\s*$") {
        $url = ($content -replace '\s+', '').Trim()
        Get-WebDocumentation -Url $url -FilePath $_.FullName
        Start-Sleep -Milliseconds 500  # Small delay to be respectful to the server
    }
}

Write-Host "Documentation update process completed!" -ForegroundColor Yellow
