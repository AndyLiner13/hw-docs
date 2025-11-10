Source: https://developers.meta.com/horizon-worlds/learn/documentation/mhcp-program/community-tutorials/creator-manual

| Tag | Description | Example | Image |
| --- | --- | --- | --- |
| **Text Decoration** |  |  |  |
| `b` | Make text bold. | `This is <b>bold</b> text.` |  |
| `u` | Make text underlined. | `This is <u>underlined</u> text.` |  |
| `i` | Make text italicized. | `This is <i>italicized</i> text.` |  |
| `s` | Make text have a strikethrough. | `This is <s>strikethrough</s> text.` |  |
| `color` | Set the text color.   *Parameter:* A hex RGB value with either 1 or 2 digits per component (e.g. #ﬀ0000 or #f00) or RGBA (e.g. #ﬀ0000ﬀ or #f00f). You can also specify a color by name. The following are supported: black, blue, green, orange, purple, red, white, and yellow | `This is <color=#f00>red<color=#0000ff> and blue</color> text.` |  |
| `mark` | Make text highlighted (on top of the text).   *Parameter:* A hex RGB color with 2 digits per component (e.g. #ﬀ0000) or RGBA (e.g. #ﬀ0000ﬀ). | `This is <mark=#ffff007f>highlighted</mark> text.` |  |
| `alpha` | Set the text alpha.   *Parameter:* A hex two-digit value (e.g. #ﬀ). | `This is <alpha=#4f>transparent</alpha> text.` |  |
| `size` | Change the font size of text.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `<size=75%>small</size>, <size=18>medium</size>, and <size=2em>large</size>` |  |
| `font` | Change the font of text.   *Parameter:* One of the following:    anton sdf   bangers sdf   electronic highway sign sdf   liberationsans sdf   oswald bold sdf   roboto-bold sdf   default | `This is <font=bangers sdf>vibrant</size> text.` |  |
| `material` | Change the material of text.   *Parameter:* The name of the material used to render the current font. The following combinations are supported:   *anton sdf*  - anton sdf - drop shadow   - anton sdf - outline   *bangers sdf*  - bangers sdf - drop shadow   - bangers sdf - outline   - bangers sdf glow   - bangers sdf logo   *liberationsans sdf*  - liberationsans sdf - metalic green   - liberationsans sdf - overlay   *roboto-bold sdf*  - roboto-bold sdf - drop shadow   - roboto-bold sdf - surface | `<font=bangers sdf>bangers sdf<br><material=bangers sdf glow>bangers sdf glow<br><material=bangers sdf logo>bangers sdf logo` |  |
| `gradient` | Render a gradient over text. If the text is not white, the gradient will be “blended” with the text color.   *Parameter:* One of the following: | `This is <gradient=Yellow to Orange - Vertical>stylish</gradient> text.` |  |
| `uppercase` | Make text uppercase. | `This is <uppercase>biG</uppercase> text.` |  |
| `lowercase` | Make text lowercase. | `This is <lowercase>SmAlL</lowercase> text.` |  |
| `smallcaps` | Make text uppercase but small. | `This is <smallcaps>biggish</smallcaps> text.` |  |
| `sup` | Make text superscript. | `Math like x<sup>2</sup> is fun!` |  |
| `sub` | Make text subscript. | `Chemistry like H<sub>2</sub>O if cool!` |  |
| `rotate` | Rotate the letters within text.   *Parameter:* An angle in degrees (e.g. 45). | `This is <rotate=-20>rotated</rotate> text.` |  |
| **Vertical Layout** |  |  |  |
| `br` | Insert a line break. | `This is a<br>line break.` |  |
| `line-height` | Set the line height for the current line and those that follow. `<line-height=200%>line A<br><line-height=100%>line B<br><line-height=50%>line C<br>line D` |  |  |
| `voffset` | Shift the “cursor” vertically up or down (impacting the text that comes next). | `do<voffset=2em>mi<voffset=1em>re` |  |
| **Horizontal Layout** |  |  |  |
| `align` | Set the alignment of the current line and those that follow.   *Parameter:* One of the following: left, center, right, justified, or flush. | `<width=150><align=right>hello<br><align=left>world` |  |
| `width` | Set the width of the current line and those that follow.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `<width=150><align=right>hello<br><align=left>world` |  |
| `indent` | Set the indent level for this line and all lines after it. It applies to lines created with `<br>` or due to wrapping. If you only want to indent lines made with `<br>`, use line-indent.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `<indent=25%>This is a kind of boring sentence.<br><indent=0%>Followed by a less interesting one.` |  |
| `line-indent` | This is the same as “indent” but it only applies to manual line breaks made with `<br>` and not line breaks causes from wrapping (e.g. when using the width attribute).   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `<line-indent=25%>This is a kind of boring sentence.<br>Followed by a less interesting one.` |  |
| `pos` | Set the position of text cursor for the rest of the line. When the tag closes with `</pos>` the cursor returns back to where it was.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `And a step<pos=3em>to the right!` |  |
| `space` | Insert whitespace.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `Let me...<space=3em>think` |  |
| `margin` | Set the margin for the current line and those that follow.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `This is a kind of boring sentence.<br><margin=4em>Followed by a less interesting one.` |  |
| `margin-left` | Set the left margin for the current line and those that follow.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `This is a kind of boring sentence.<br><margin-left=4em>Followed by a less interesting one.` |  |
| `margin-right` | Set the right margin for the current line and those that follow.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `This is a kind of boring sentence.<br><margin-right=4em>Followed by a less interesting one.` |  |
| `cspace` | Modify the spacing between letters. A positive value spreads them out and a negative value brings them closer together.   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `This is <cspace=1em>crazy` |  |
| `mspace` | Modify the width of each letter, turning the font into a monospace font (meaning every character takes up the same horizontal space).   *Parameter:* A measurement value in pixels (e.g. 10), font units (e.g. 2em), or percent (e.g. 50%). Percents are relative to the initial size of the font. | `This is <mspace=1em>whimsy</mspace> text.` |  |
| **Glyphs / Sprites** |  |  |  |
| `sprite` | Render a builtin sprite. Notice that this tag takes a second attribute called “index” that specifies which sprite to render in the set.   *Parameter:* Only “dropcap numbers” is currently supported. | `<sprite=“dropcap numbersz” index=3>` |  |
| **Parsing** |  |  |  |
| `noparse` | Disable parsing on text. | `Is <noparse>this <b>bold</b></noparse> or is <b>this</b>?` |  |