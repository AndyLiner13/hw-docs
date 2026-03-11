---
source: https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_imagestyle
---

# [ImageStyle type](#imagestyle-type)

Represents the styles of an [Image](../Functions/Image_2.md) component in a UI panel.

## [Signature](#signature)

```ts
export declare type ImageStyle = ViewStyle & {
    resizeMode?: 'cover' | 'contain' | 'stretch' | 'center' | 'repeat';
    tintColor?: Bindable<ColorValue>;
    tintOperation?: 'replace' | 'multiply';
};
```

## [References](#references)

[ViewStyle](ViewStyle.md), [Bindable](Bindable.md), [ColorValue](ColorValue.md)

## [Remarks](#remarks)

For descriptions of the available styles, see [Custom UI Styles](../../../Desktop%20editor/Custom%20UI/Custom%20UI%20Styles.md#imagestyle).

