# Data Model: Modern Footer with Contact Info

**Date**: 2026-03-30 | **Feature**: `003-modern-footer`

## Entities

### ContactItem

Represents a single piece of contact information displayed in the footer.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `icon` | `React.ReactNode` | SVG icon component | Required |
| `label` | `string` | Display label (e.g., "Email") | Required, non-empty |
| `value` | `string` | Display value (e.g., "hello@yourdomain.com") | Required, non-empty |
| `href` | `string \| null` | Optional link (`mailto:`, `tel:`, or `null` for text-only) | Nullable |

**Validation rules**:
- If `href` is not `null`, all external `href`s MUST use `target="_blank" rel="noopener noreferrer"`.
- Location item MUST have `href: null` (text-only per clarification).

---

### SocialLink

Represents a single social media profile link in the footer.

| Field | Type | Description | Constraints |
|-------|------|-------------|-------------|
| `name` | `string` | Platform name (e.g., "GitHub") | Required, non-empty |
| `href` | `string` | URL to the social profile | Required, valid URL, opens in new tab |
| `icon` | `React.FC<{ className?: string }>` | SVG icon component | Required |

**Instances** (from clarifications):
- GitHub: `https://github.com/yourusername`
- LinkedIn: `https://linkedin.com/in/yourusername`
- Instagram: `https://instagram.com/yourusername`

---

## State Transitions

No dynamic state. All data is static and resolved at build-time.

## TypeScript Interfaces

```typescript
// src/features/footer/types/index.ts

export interface ContactItem {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string | null;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: React.FC<{ className?: string }>;
}
```
