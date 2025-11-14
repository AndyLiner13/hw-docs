Source: https://developers.meta.com/horizon-worlds/learn/documentation/desktop-editor/custom-ui/api-reference-for-custom-ui

# Custom UI Styles

The available styles for [customizing](/hw-docs/Desktop%20editor/Custom%20UI/Create%20a%20custom%20UI%20panel.md) UI panels in your world are defined in the type aliases of the [UI](https://developers.meta.com/horizon-worlds/reference/2.0.0/ui_uicomponent) API, such as the [ColorValue](/hw-docs/Reference/ui/Type%20Aliases/ColorValue.md) type. This topic describes the available style for each type.

Type aliases:

## LayoutStyle

API documentation: [LayoutStyle](/hw-docs/Reference/ui/Type%20Aliases/LayoutStyle.md) type alias.

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| display | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<'none' \| 'flex'>` | [Default: `'flex'`]   Similar to `display` in CSS, but only supports ‘none’ and ‘flex’. The display mode of the UI element.  `none`: The UI element is not rendered.  `flex`: The UI element is displayed as a block. This is the default value. |
| height | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number \| string>` | Similar to `height` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| width | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number \| string>` | Similar to `width` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| bottom | `number \| string` | Similar to `bottom` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| end | `number \| string` | Equivalent to `right` when `direction` is `'ltr'`. Equivalent to `left` when `direction` is `'rtl'`. |
| left | `number \| string` | Similar to `left` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| right | `number \| string` | Similar to `right` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| start | `number \| string` | Equivalent to `left` when `direction` is `'ltr'`. Equivalent to `right` when `direction` is `'rtl'`. |
| top | `number \| string` | Similar to `top` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| minWidth | `number \| string` | Similar to `min-width` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| maxWidth | `number \| string` | Similar to `max-width` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| minHeight | `number \| string` | Similar to `min-height` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| maxHeight | `number \| string` | Similar to `max-height` in CSS, but only supports points and percentages. Ems and other units are not supported. |
| margin | `number \| string` | Setting `margin` has the same effect as setting each of `marginTop`, `marginLeft`, `marginBottom`, and `marginRight`. |
| marginBottom | `number \| string` | Works like `margin-bottom` in CSS. |
| marginEnd | `number \| string` | Equivalent to `marginRight` when `direction` is `'ltr'`. Equivalent to `marginLeft` when `direction` is `'rtl'`. |
| marginHorizontal | `number \| string` | Setting `marginHorizontal` has the same effect as setting both `marginLeft` and `marginRight`. |
| marginLeft | `number \| string` | Works like `margin-left` in CSS. |
| marginRight | `number \| string` | Works like `margin-right` in CSS. |
| marginStart | `number \| string` | Equivalent to `marginLeft` when `direction` is `'ltr'`. Equivalent to `marginRight` when `direction` is `'rtl'`. |
| marginTop | `number \| string` | Works like `margin-top` in CSS. |
| marginVertical | `number \| string` | Setting `marginVertical` has the same effect as setting both `marginTop` and `marginBottom`. |
| padding | `number \| string` | Setting `padding` has the same effect as setting each of `paddingTop`, `paddingBottom`, `paddingLeft`, and `paddingRight`. |
| paddingBottom | `number \| string` | Works like `padding-bottom` in CSS. |
| paddingEnd | `number \| string` | Equivalent to `paddingRight` when `direction` is `'ltr'`. Equivalent to `paddingLeft` when `direction` is `'rtl'`. |
| paddingHorizontal | `number \| string` | Setting `paddingHorizontal` has the same effect as setting both `paddingLeft` and `paddingRight`. |
| paddingLeft | `number \| string` | Works like `padding-left` in CSS. |
| paddingRight | `number \| string` | Works like `padding-right` in CSS. |
| paddingStart | `number \| string` | Equivalent to `paddingLeft` when `direction` is `'ltr'`. Equivalent to `paddingRight` when `direction` is `'rtl'`. |
| paddingTop | `number \| string` | Works like `padding-top` in CSS. |
| paddingVertical | `number \| string` | Setting `paddingVertical` has the same effect as setting both `paddingTop` and `paddingBottom`. |
| position | `'absolute' \| 'relative'` | [Default: `'relative'`]   Similar to `position` in CSS, but everything is set to `'relative'` by default, so ‘absolute’ positioning is always relative to the parent. |
| flexDirection | `'row'` `'row-reverse'` `'column'` `'column-reverse'` | [Default: `'column'`] Works like `flex-direction` in CSS, except the default is ‘column’. Controls the direction of the main axis, in which the children are stacked. |
| flexWrap | `'nowrap'` `'wrap'` `'wrap-reverse'` | [Default: `'nowrap'`] Works like `flex-wrap` in CSS. Controls whether children can wrap around after they hit the end of a flex container. |
| justifyContent | `'flex-start'` `'flex-end'` `'center'` `'space-between'` `'space-around'` `'space-evenly'` | [Default: ‘flex-start’] Works like `justify-content` in CSS. Aligns children in the main direction (along the main axis). For example, if children are flowing vertically, `justifyContent` controls how they align vertically. |
| alignContent | `'flex-start'` `'flex-end'` `'center'` `'stretch'` `'space-between'` `'space-around'` | [Default: `'flex-start'`] Works like `align-content` in CSS. Aligns rows or columns in the cross direction (perpendicular to the main axis). Only works if `flexWrap` is enabled and there are multiple rows or columns. |
| alignItems | `'flex-start'` `'flex-end'` `'center'` `'stretch'` `'baseline'` | [Default: `'stretch'`] Works like `align-items` in CSS. Aligns children within a row or column in the cross direction (perpendicular to the main axis). For example, if children are flowing vertically, `alignItems` controls how they align horizontally. |
| alignSelf | `'auto'` `'flex-start'` `'flex-end'` `'center'` `'stretch'` `'baseline'` | [Default: `'auto'`] Works like `align-self` in CSS. Controls how a child aligns in the cross direction (perpendicular to the main axis), overriding the `alignItems` of the parent. |
| overflow | `'visible' \| 'hidden'` | [Default: `'visible'`] Works like `overflow` in CSS. Controls how children are measured and displayed. `'hidden'` causes views to be clipped. |
| flex | `number` | `flex` does not work the same way as in CSS. `flex` is a number rather than a string. When `flex` is a positive number, the component is flexible and will be sized proportional to its `flex` value. So a component with `flex` set to ‘2’ will take twice the space as a component with `flex` set to ‘1’. `flex: X` (where `X` is a positive number) equates to `flexGrow: X, flexShrink: 1, flexBasis: 0`. When `flex` is ‘0’ , the component is inflexible and is sized according to width and height. When flex is ‘-1’, the component is normally sized according to width and height. However, if there’s not enough space, the component will shrink to its `minWidth` and `minHeight`. |
| flexGrow | `number` | [Default: ‘0’] Works like `flex-grow` in CSS. Accepts a float number >= 0. Describes how the remaining space in the container should be distributed among its children along the main axis. After laying out its children, a container will distribute any remaining space among its children weighted by the children’s `flexGrow` values. |
| flexShrink | `number` | [Default: ‘0’] Works like `flex-shrink` in CSS. Accepts a float number >= 0. Describes how to shrink children along the main axis when the total size of the children overflows the size of the container. A container will shrink its children weighted by the children’s `flexShrink` values. `flexShrink` is very similar to `flexGrow` and can be thought of in the same way if any overflowing size is considered to be negative remaining space. These two properties also work well together. |
| flexBasis | `number \| string` | Works like `flex-basis` in CSS. Specifies the default size of an item along the main axis of the container, that is, the size of the item before any `flexGrow` and `flexShrink` calculations are performed. |
| aspectRatio | `number` | Controls the size of the undefined dimension of a component. It takes min/max dimensions into account. If one of width/height is set, aspect ratio controls the size of the unset dimension. If flex basis/grow/shrink is set, aspect ratio controls the size of the node in the cross axis if unset. |
| zIndex | `number` | Works like `z-index` in CSS. Controls which components display on top of others – components with a larger `zIndex` will render on top. If `zIndex` are not specified, components render according to their order in the document tree – later components draw over earlier ones. `zIndex` can be used if you don’t want this default behavior. |
| layoutOrigin | `[number, number]` | [Default: `'[0, 0]'`] The origin of the UI element when `position` is `'absolute'`, where `[0, 0]` is the top left of the element and `[1, 1]` is the bottom right of the element. |
| direction | `'inherit'` `'ltr'` `'rtl'` | [Default: `'inherit'`] Specifies the directional flow of the user interface. |

## BorderStyle

API documentation: [BorderStyle](/hw-docs/Reference/ui/Type%20Aliases/BorderStyle.md) type alias.

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| borderColor | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)[`<ColorValue>`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui) | Works like `border-color` in CSS. The color of the border. |
| borderRadius | `number` | Works like `border-radius` in CSS. The radius of the border. |
| borderBottomLeftRadius | `number` | Works like `border-bottom-left-radius` in CSS. The radius of the bottom left corner. |
| borderBottomRightRadius | `number` | Works like `border-bottom-right-radius` in CSS. The radius of the bottom right corner. |
| borderTopLeftRadius | `number` | Works like `border-top-left-radius` in CSS. The radius of the top left corner. |
| borderTopRightRadius | `number` | Works like `border-top-right-radius` in CSS. The radius of the top right corner. |
| borderWidth | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>` | Works like `border-width` in CSS, but only supports points. The width of the border. |
| borderBottomWidth | `number` | Works like `border-bottom-width` in CSS. The width of the bottom border. |
| borderEndWidth | `number` | Equivalent to `borderRightWidth` when `direction` is `'ltr'`. Equivalent to `borderLeftWidth` when `direction` is `'rtl'`. |
| borderLeftWidth | `number` | Works like `border-left-width` in CSS. The width of the left border. |
| borderRightWidth | `number` | Works like `border-right-width` in CSS. The width of the right border. |
| borderStartWidth | `number` | Equivalent to `borderLeftWidth` when `direction` is `'ltr'`. Equivalent to `borderRightWidth` when `direction` is `'rtl'`. |
| borderTopWidth | `number` | Works like `border-top-width` in CSS. The width of the top border. |

## ShadowStyle

API documentation: [ShadowStyle](/hw-docs/Reference/ui/Type%20Aliases/ShadowStyle.md) type alias.

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| shadowColor | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)[`<ColorValue>`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-u) | The drop color of the shadow. |
| shadowFalloff | `'linear'` `'sqrt'` `'sigmoid'` | The falloff function, or fading, of the shadow. |
| shadowOffset | `[number, number]` | The offset of the shadow in [x, y] format. |
| shadowOpacity | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>` | The opacity of the shadow. The number is multiplied by the color’s alpha component, and should be in the range from ‘0.0’ to ‘1.0’. |
| shadowRadius | `number` | The blur radius of the shadow. |
| shadowSpreadRadius | `number` | The radius by which the shadow expands or shrinks under the component. May take a negative number. |

## TransformStyle

API documentation: [TransformStyle](/hw-docs/Reference/ui/Type%20Aliases/TransformStyle.md) type alias.

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| transform | `Array<{rotate:`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<string>}` `\| {scale:`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>}` `\| {scaleX:`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>}` `\| {scaleY:`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>}` `\| {translate:[`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>,`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>]}` `\| {translateX:`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>}` `\| {translateY:`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>}` `\| {skewX:`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<string>}` `\| {skewY:`[`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<string>}` | `transform` accepts an array of transformation objects. Each object specifies the property that will be transformed as the key, and the value to use in the transformation.   `rotate`: Rotate the element around the `transformOrigin`. Value requires a string expressed in degrees (e.g. ‘45deg’ ) or radians (e.g. ‘0.7854rad’).   `scale`: Scale the element uniformly by the given multiplier, with the `transformOrigin` being the fixed point. Equivalent to providing the same value to both `scaleX` and `scaleY`.   `scaleX`: Scale the element horizontally by the given multiplier.   `scaleY`: Scale the element vertically by the given multiplier.   `translate`: Move the element by the given x and y values in [x, y] format. Equivalent to providing the values to `translateX` and `translateY` independently.   `translateX`: Move the element horizontally by the given value in pixels.   `translateY`: Move the element vertically by the given value in pixels.   `skewX`: Skew the element horizontally by the given angle, represented in degrees or radians.   `skewY`: Skew the element vertically by the given angle, represented in degrees or radians. |
| transformOrigin | `[number \| string, number \| string]` | [Default: [‘50%’, ‘50%’]]   The origin point of the transform, specified as an [x, y] array, where [0, 0] denotes the top left corner of the UI element. Each component can be a number in pixels or a percentage string. |

## ViewStyle

API documentation: [ViewStyle](/hw-docs/Reference/ui/Type%20Aliases/ViewStyle.md) type alias.

Inherits the [LayoutStyle](/hw-docs/Reference/ui/Type%20Aliases/LayoutStyle.md), [BorderStyle](/hw-docs/Reference/ui/Type%20Aliases/BorderStyle.md), [ShadowStyle](/hw-docs/Reference/ui/Type%20Aliases/ShadowStyle.md), and [TransformStyle](/hw-docs/Reference/ui/Type%20Aliases/TransformStyle.md) type aliases.

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| backgroundColor | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)[`<ColorValue>`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui) | Works like `'background-color'` in CSS. The background color of the component. |
| backgroundClip | `'border-box' \| 'padding-box'` | [Default: `'border-box'`]    Controls whether to render the background behind the border. Useful when the border color is transparent. |
| opacity | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>` | Set an opacity for the component. The number should be in the range from ‘0.0’ to ‘1.0’. |
| gradientColorA | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)[`<ColorValue>`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui) | The starting color of the gradient background. |
| gradientColorB | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)[`<ColorValue>`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui) | The ending color of the gradient background. |
| gradientXa | `number \| string` | The x component of the starting position (corresponding to gradientColorA) of the gradient background. The value is a percentage as a number (from ‘0.0’ to ‘1.0’) or a string (from ‘0%’ to ‘100%’). |
| gradientYa | `number \| string` | The y component of the starting position (corresponding to gradientColorA ) of the gradient background. The value is a percentage as a number (from ‘0.0’ to ‘1.0’) or a string (from ‘0%’ to ‘100%’). |
| gradientXb | `number \| string` | The x component of the ending position (corresponding to gradientColorB) of the gradient background. The value is a percentage as a number (from ‘0.0’ to ‘1.0’) or a string (from ‘0%’ to ‘100%’). |
| gradientYb | `number \| string` | The y component of the ending position (corresponding to gradientColorB) of the gradient background. The value is a percentage as a number (from ‘0.0’ to ‘1.0’) or a string (from ‘0%’ to ‘100%’). |
| gradientAngle | `string` | The gradient direction, pointing from the ending position to the starting position (gradientColorA is in the direction of gradientAngle). Default is ‘0deg’, which is equivalent to gradientYa: 0, gradientYb: 1. The value is represented in degrees. |

## TextStyle

API documentation: [TextStyle](/hw-docs/Reference/ui/Type%20Aliases/TextStyle.md) type alias.

Inherits the [ViewStyle](/hw-docs/Reference/ui/Type%20Aliases/ViewStyle.md) type alias. Italics are not supported, and there are only a limited number of custom fonts available.

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| color | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)[`<ColorValue>`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui) | [Default: `'white'`]  The color of the text. |
| fontFamily | `string` | [Default: `'Roboto'`]  The font family of the text. |
| fontSize | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<number>` | [Default: `'20'`]  The font size of the text. |
| fontWeight | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<'normal'` `\| 'bold'` `\| '100'` `\| '200'` `\| '300'` `\| '400'` `\| '500'` `\| '600'` `\| '700'` `\| '800'` `\| '900' >` | [Default: `'normal'`]  The font weight. Not all fonts have all the weight variations. If the specified variation does not exist, it will fallback to the closest one. |
| letterSpacing | `number` | The spacing between the characters of the text. By default there is no extra letter spacing. |
| lineHeight | `number` | The height of each line in the text. |
| textAlign | `'auto' \| 'left' \| 'right' \| 'center'` | The alignment of the text. |
| textAlignVertical | `'auto' \| 'top' \| 'bottom' \| 'center'` | The vertical alignment of the text. |
| textDecorationLine | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)`<'none' \| 'underline' \| 'line-through' \| 'underline line-through' >` | Additional text decorations. |
| textShadowColor | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)[`<[ColorValue]>`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui) | The color of the text shadow. Text shadow is only drawn when a nonzero textShadowOffset is set. |
| textShadowOffset | `[number, number]` | The offset of the text shadow, in pixels, in [x, y] format. |
| textShadowRadius | `number` | The blur radius of the text shadow. Text shadow is only drawn when textShadowOffset is set. |
| whiteSpace | `'normal' \| 'pre-line' \| 'pre-wrap'` | Additional space if needed for justification. |

### Available Fonts

| **Font Family** | **Weight Variations** | **Preview** |
| --- | --- | --- |
| Anton | ‘normal’/’400’ |  |
| Bangers | ‘normal’/’400’ |  |
| Kallisto | ‘bold’/’700’ |  |
| Optimistic | ‘normal’/’400’ |  |
|  | ‘500’ |  |
|  | ‘bold’/’700’ |  |
| Oswald | ‘normal’/’400’ |  |
| Roboto | ‘100’ |  |
|  | ‘300’ |  |
|  | ‘normal’/’400’ |  |
|  | ‘500’ |  |
|  | ‘bold’/’700’ |  |
|  | ‘900’ |  |
| Roboto-Mono | ‘normal’/’400’ |  |
|  | ‘500’ |  |
|  | ‘bold’/’700’ |  |

## ImageStyle

API documentation: [ImageStyle](/hw-docs/Reference/ui/Type%20Aliases/ImageStyle.md)

Inherits the [ViewStyle](/hw-docs/Reference/ui/Type%20Aliases/ViewStyle.md) type alias.

| Name | Type | Description |
| --- | --- | --- |
| resizeMode | `'cover' \| 'contain' \| 'stretch' \| 'center' \| 'repeat'` | [Default: `'cover'`]   Determines how to resize the image when the frame doesn’t match the raw image dimensions.   `cover`: Scale the image uniformly (maintain the aspect ratio) so that at least one of width and height will be equal to the corresponding dimension of the view, and the other will be larger.   `contain`: Scale the image uniformly (maintain the aspect ratio) so that both width and height will be equal to or less than the corresponding dimension of the view.   `stretch`: Scale width and height independently, which may change the aspect ratio of the source.   `center`: Center the image in the view along both dimensions. If the image is larger than the view, scale it down uniformly so that it is contained in the view.   `repeat`: Repeat the image to cover the frame of the view. The image will keep its size and aspect ratio if it is smaller than the view, and will be scaled down uniformly so that it is contained in the view if it is larger than the view. |
| tintColor | [`Bindable`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui)[`<ColorValue>`](https://developers.meta.com/horizon-worlds/learn/documentation/typescript/api-references-and-examples/custom-ui) | Changes the color of all the non-transparent pixels to the `tintColor`. |
| tintOperation | `'replace' \| 'multiply'` | Changes how the tint color is applied to the original image source. |