import clsx from 'clsx';
import styles from './Button.module.css';
import { capitalize } from '../../../utils/helpers/stringUtils';

/**
 * ============================================================================
 * <Button /> Component
 * ============================================================================
 *
 * A flexible, accessible, and theme-aware button component designed for
 * consistent UI behavior and visual hierarchy across the application.
 * Supports multiple variants, shapes, icon placements, and color customization.
 *
 * ----------------------------------------------------------------------------
 * PROPS
 * ----------------------------------------------------------------------------
 *
 * @param {'primary' | 'secondary' | 'ghost' | 'outline' | 'clear' | 'text' | 'iconButton'} [variant='primary']
 *                                        → Determines the button's visual style and hierarchy.
 *                                          - `primary`: Main action button
 *                                          - `secondary`: Subtle secondary action
 *                                          - `ghost`: Transparent background
 *                                          - `outline`: Bordered outline button
 *                                          - `clear`: Minimal, often icon-only
 *                                          - `text`: Link-like, text-only button
 *                                          - `iconButton`: Icon-only circular/square button
 *
 * @param {'extrasmall' | 'small' | 'medium' | 'large'} [size='small']
 *                                        → Controls button size (padding, font, and height)
 *
 * @param {'default' | 'square' | 'pill' | 'round' | 'soft'} [shape='default']
 *                                        → Defines button border shape
 *                                          - `default`: Regular rounded corners
 *                                          - `square`: No rounding
 *                                          - `pill`: Fully rounded edges
 *                                          - `round`: Perfect circle (for icon buttons)
 *                                          - `soft`: Slightly rounded edges
 *
 * @param {string} [btnColor]              → Optional custom CSS color
 *                                          (applies primarily to ghost/outline variants)
 *
 * @param {ReactNode} [leftIcon=null]      → Optional icon to display on the left of the label
 * @param {ReactNode} [rightIcon=null]     → Optional icon to display on the right of the label
 *
 * @param {boolean} [fullWidth=false]      → Stretches the button to occupy full container width
 * @param {boolean} [disabled=false]       → Disables button interactions and applies dimmed styling
 *
 * @param {ReactNode|string} [children]    → Button text or custom content
 *                                           (defaults to "{Variant} Button" with capitalization)
 *
 * @param {string} [className='']          → Custom CSS class for style overrides
 *
 * @param {'button' | 'submit' | 'reset'} [type='button']
 *                                        → Standard HTML button type
 *
 * @param {...any} props                   → Pass-through attributes (e.g. aria-label, id, etc.)
 *
 * ----------------------------------------------------------------------------
 * Features
 * ----------------------------------------------------------------------------
 * - Works seamlessly with icons (left or right)
 * - Customizable color via CSS variable (`--btn-color`)
 * - Responsive design via size/shape props
 * - Accessible (keyboard & screen reader friendly)
 * - Consistent with design system themes
 *
 * ----------------------------------------------------------------------------
 * Example Usage:
 * ----------------------------------------------------------------------------
 *
 * <Button variant="primary" size="medium">
 *   Submit
 * </Button>
 *
 * <Button
 *   variant="outline"
 *   shape="pill"
 *   leftIcon={<Save size={16} />}
 *   onClick={handleSave}
 * >
 *   Save Changes
 * </Button>
 *
 * <Button
 *   variant="iconButton"
 *   shape="round"
 *   size="small"
 *   leftIcon={<Trash2 size={14} />}
 *   aria-label="Delete"
 * />
 *
 * <Button
 *   variant="ghost"
 *   btnColor="var(--color-accent)"
 *   rightIcon={<ArrowRight size={14} />}
 * >
 *   Learn More
 * </Button>
 *
 * ============================================================================
 */

export default function Button({
  variant = 'primary',
  size = 'small',
  shape,
  btnColor,
  leftIcon = null,
  rightIcon = null,
  fullWidth = false,
  disabled = false,
  children = `${capitalize(variant)} Button`,
  className = '',
  type = 'button',
  ...props
}) {
  // Apply custom color if provided (works for ghost/outline variants)
  const style = btnColor ? { '--btn-color': btnColor } : undefined;

  return (
    <button
      type={type}
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        shape && styles[shape],
        fullWidth && styles.fullWidth,
        className
      )}
      style={style}
      disabled={disabled}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && (
        <span className={clsx(styles.icon, styles.left)}>{leftIcon}</span>
      )}

      {/* Button Label */}
      <span className={styles.label}>{children}</span>

      {/* Right Icon */}
      {rightIcon && (
        <span className={clsx(styles.icon, styles.right)}>{rightIcon}</span>
      )}
    </button>
  );
}
