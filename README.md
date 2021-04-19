# jit-tailwindcss-theme-variants

## Group variants like group-hover not working

Expected Output:
```css
:root.dark-theme .dark\:group:hover .dark\:group-hover\:bg-amber-300 {
	--tw-bg-opacity: 1;
	background-color: rgba(252, 211, 77, var(--tw-bg-opacity));
}
```

Output 
```css
:root.dark-theme .dark\:group:hover .group-hover\:bg-teal-300 {
	--tw-bg-opacity: 1;
	background-color: rgba(94, 234, 212, var(--tw-bg-opacity));
}

:root.dark-theme .dark\:group:hover .group-hover\:bg-amber-300 {
	--tw-bg-opacity: 1;
	background-color: rgba(252, 211, 77, var(--tw-bg-opacity));
}
```
