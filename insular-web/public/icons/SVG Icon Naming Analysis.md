# SVG Icon Naming Analysis

## Naming Convention Guide

Based on the analysis of all SVG files, the following naming convention is used:
- **Format**: `{icon-type}_{direction/variant}_{style}`
- **Styles**: 
  - `boxed` - Icon with rounded square background
  - `outlined` - Icon with stroke/outline style
  - `naked` - Icon without background or container
  - `filled` - Solid filled icon

---

## Complete Icon Inventory

### Arrow Icons (Circular Background)

| Original File | Suggested Name | Description |
|--------------|----------------|-------------|
| Asset28.svg | `arrow_bottom-left_boxed` | Blue arrow pointing bottom-left on light gray circular background |
| Asset29.svg | `arrow_top-left_boxed` | Blue arrow pointing top-left on light gray circular background |
| Asset30.svg | `arrow_bottom-right_boxed` | Blue arrow pointing bottom-right on light gray circular background |
| Asset31.svg | `arrow_top-right_boxed` | Blue arrow pointing top-right on light gray circular background |
| Asset32.svg | `arrow_up_boxed` | Blue arrow pointing up on light gray circular background |
| Asset33.svg | `arrow_down_boxed` | Blue arrow pointing down on light gray circular background |
| Asset34.svg | `arrow_right_boxed` | Blue arrow pointing right on light gray circular background |
| Asset35.svg | `arrow_left_boxed` | Blue arrow pointing left on light gray circular background |

### Arrow Icons (Naked/Simple)

| Original File | Suggested Name | Description |
|--------------|----------------|-------------|
| Asset1.svg | `arrow_bottom-left_naked` | Simple blue arrow pointing bottom-left, no background |
| Asset2.svg | `arrow_top-left_naked` | Simple blue arrow pointing top-left, no background |
| Asset3.svg | `arrow_bottom-right_naked` | Simple blue arrow pointing bottom-right, no background |
| Asset4.svg | `arrow_top-right_naked` | Simple blue arrow pointing top-right, no background |
| Asset5.svg | `arrow_up_naked` | Simple blue arrow pointing up, no background |
| Asset6.svg | `arrow_down_naked` | Simple blue arrow pointing down, no background |
| Asset7.svg | `arrow_right_naked` | Simple blue arrow pointing right, no background |
| Asset8.svg | `arrow_left_naked` | Simple blue arrow pointing left, no background |

### Financial/Business Icons (Dark Background)

| Original File | Suggested Name | Description |
|--------------|----------------|-------------|
| Asset25.svg | `globe_boxed` | White globe icon with blue accent on dark rounded square background |
| Asset27.svg | `arrow_bottom-left_globe_boxed` | White globe with blue arrow pointing bottom-left on dark background |
| Asset35.svg | `wallet_boxed` | White wallet icon with blue accent on dark rounded square background |
| Asset36.svg | `database_dollar_boxed` | White database cylinder with blue dollar badge on dark background |
| Asset37.svg | `cards_boxed` | White credit cards icon with blue card on dark background |
| Asset38.svg | `clock_dollar_boxed` | White clock with blue dollar badge on dark background |
| Asset39.svg | `inbox_boxed` | White inbox/mail tray icon with blue top on dark background |
| Asset40.svg | `pin_boxed` | Blue push pin icon with white accent on dark background |
| Asset41.svg | `hand_coins_boxed` | Hand holding coins icon with blue and white elements on dark background |

### Action/Gesture Icons

| Original File | Suggested Name | Description |
|--------------|----------------|-------------|
| Asset9.svg | `swipe_right_naked` | Blue finger/hand swiping right gesture with gray trail |
| Asset10.svg | `swipe_left_naked` | Blue finger/hand swiping left gesture with gray trail |
| Asset23.svg | `tap_naked` | Blue finger tap gesture with gray elements |
| Asset24.svg | `pinch_naked` | Blue pinch/zoom gesture with gray elements |

### UI Element Icons

| Original File | Suggested Name | Description |
|--------------|----------------|-------------|
| Asset11.svg | `chevron_down_naked` | Simple blue chevron pointing down |
| Asset12.svg | `chevron_up_naked` | Simple blue chevron pointing up |
| Asset13.svg | `chevron_right_naked` | Simple blue chevron pointing right |
| Asset14.svg | `chevron_left_naked` | Simple blue chevron pointing left |
| Asset15.svg | `chevron_down_double_naked` | Double blue chevron pointing down |
| Asset16.svg | `chevron_up_double_naked` | Double blue chevron pointing up |
| Asset17.svg | `chevron_right_double_naked` | Double blue chevron pointing right |
| Asset18.svg | `chevron_left_double_naked` | Double blue chevron pointing left |

### Navigation Icons

| Original File | Suggested Name | Description |
|--------------|----------------|-------------|
| Asset19.svg | `corner_bottom-left_naked` | Blue L-shaped corner pointing bottom-left |
| Asset20.svg | `corner_top-left_naked` | Blue L-shaped corner pointing top-left |
| Asset21.svg | `corner_bottom-right_naked` | Blue L-shaped corner pointing bottom-right |
| Asset22.svg | `corner_top-right_naked` | Blue L-shaped corner pointing top-right |

---

## Style Categories Summary

### Boxed Style (Circular)
- Light gray circular background
- Blue icon centered
- Used for: Directional arrows (Assets 28-35)

### Boxed Style (Rounded Square - Dark)
- Dark navy/black rounded square background
- White/blue icon elements
- Used for: Business/financial icons (Assets 25, 27, 35-41)

### Naked Style
- No background
- Pure icon shape
- Blue primary color with occasional gray accents
- Used for: Arrows, chevrons, corners, gestures

---

## Naming Pattern Examples

```
arrow_top-right_boxed
chevron_down_double_naked
swipe_left_naked
database_dollar_boxed
corner_bottom-left_naked
```

## Notes

- All directional indicators use compass-style naming (top, bottom, left, right)
- Compound directions use hyphen: `top-right`, `bottom-left`
- Multiple elements separated by underscore: `database_dollar`
- Style modifier always comes last: `_boxed`, `_naked`, `_outlined`
