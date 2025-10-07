import re

file_path = 'insular-web/src/pages/Home/index.tsx'

with open(file_path, 'r', encoding='utf-8') as f:
    content = f.read()

# Replace trail fade logic
old_pattern = r"ctx\.fillStyle = `rgba\(\$\{base\.r\},\$\{base\.g\},\$\{base\.b\},0\.012\)`; // longer trail persistence\n    ctx\.fillRect\(0, 0, width, height\);"
new_text = """// Faster trail fade when scrolling for performance
    const trailFade = isScrollingRef.current ? 0.25 : 0.012;
    ctx.fillStyle = `rgba(${base.r},${base.g},${base.b},${trailFade})`;
    ctx.fillRect(0, 0, width, height);"""
content = re.sub(old_pattern, new_text, content)

# Replace maxTrail logic
old_pattern2 = r"const maxTrail = 24;"
new_text2 = "// Reduce trail count during scroll for performance\n      const maxTrail = isScrollingRef.current ? 6 : 24;"
content = re.sub(old_pattern2, new_text2, content)

# Add scroll listener after line with "}, []);" before "// Scroll reveal text effect"
old_pattern3 = r"(\}, \[\]\);)\n\n  (// Scroll reveal text effect)"
new_text3 = r"""\1

  // Scroll detection for performance optimization
  useEffect(() => {
    const handleScroll = () => {
      isScrollingRef.current = true;

      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = window.setTimeout(() => {
        isScrollingRef.current = false;
      }, 150);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (scrollTimeoutRef.current) {
        window.clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  \2"""
content = re.sub(old_pattern3, new_text3, content)

with open(file_path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated index.tsx with scroll optimizations")
