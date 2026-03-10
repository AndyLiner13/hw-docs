---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/core_infoslide
---

# [InfoSlide type](#infoslide-type)

Info Slides carousel data.

## [Signature](#signature)

```
export
 declare type 
InfoSlide
 
=
 
{

    title
?:
 i18n_utils
.
LocalizableText
 
|
 
string
;

    message
?:
 i18n_utils
.
LocalizableText
 
|
 
string
;

    imageUri
?:
 
string
;

    style
?:
 
InfoSlideStyle
;


};
```

## [References](#references)

[InfoSlideStyle](InfoSlideStyle.md)

