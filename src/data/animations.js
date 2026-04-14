export const categories = [
  { id: 'all', name: 'All' },
  { id: 'loaders', name: 'Loaders' },
  { id: 'hover', name: 'Hover Effects' },
  { id: 'buttons', name: 'Buttons' },
  { id: 'backgrounds', name: 'Backgrounds' },
  { id: 'text', name: 'Text Effects' },
];

export const animations = [
  // ============ LOADERS ============
  {
    id: 'pulse-ring',
    name: 'Pulse Ring',
    category: 'loaders',
    description: 'Expanding rings from center point',
    keyframes: `@keyframes pulseRing {
  0% {
    transform: scale(0.5);
    opacity: 1;
  }
  100% {
    transform: scale(1.5);
    opacity: 0;
  }
}`,
    animationCSS: `animation: pulseRing 1.5s ease-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'bouncing-dots',
    name: 'Bouncing Dots',
    category: 'loaders',
    description: 'Three dots bouncing in sequence',
    keyframes: `@keyframes bounce {
  0%, 80%, 100% {
    transform: scale(0);
  }
  40% {
    transform: scale(1);
  }
}`,
    animationCSS: `animation: bounce 1.4s ease-in-out infinite both;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'rotating-spinner',
    name: 'Rotating Spinner',
    category: 'loaders',
    description: 'Classic rotating line spinner',
    keyframes: `@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}`,
    animationCSS: `animation: spin 1s linear infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'morphing-square',
    name: 'Morphing Square',
    category: 'loaders',
    description: 'Square rotating and morphing to circle',
    keyframes: `@keyframes morph {
  0% {
    border-radius: 50%;
    transform: rotate(0deg);
  }
  25% {
    border-radius: 0%;
    transform: rotate(90deg);
  }
  50% {
    border-radius: 50%;
    transform: rotate(180deg);
  }
  75% {
    border-radius: 0%;
    transform: rotate(270deg);
  }
  100% {
    border-radius: 50%;
    transform: rotate(360deg);
  }
}`,
    animationCSS: `animation: morph 3s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'typing-dots',
    name: 'Typing Dots',
    category: 'loaders',
    description: 'Dots with staggered fade like typing indicator',
    keyframes: `@keyframes typing {
  0%, 60%, 100% {
    transform: translateY(0);
  }
  30% {
    transform: translateY(-8px);
  }
}`,
    animationCSS: `animation: typing 1.4s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },

  // ============ HOVER EFFECTS ============
  {
    id: 'glow-pulse',
    name: 'Glow Pulse',
    category: 'hover',
    description: 'Element glows brighter on hover',
    keyframes: `@keyframes glow {
  0%, 100% {
    box-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
  }
  50% {
    box-shadow: 0 0 15px currentColor, 0 0 30px currentColor, 0 0 45px currentColor;
  }
}`,
    animationCSS: `animation: glow 2s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'wiggle',
    name: 'Wiggle',
    category: 'hover',
    description: 'Playful shake on hover',
    keyframes: `@keyframes wiggle {
  0%, 100% {
    transform: rotate(-3deg);
  }
  50% {
    transform: rotate(3deg);
  }
}`,
    animationCSS: `animation: wiggle 0.3s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'flip-card',
    name: 'Flip',
    category: 'hover',
    description: '3D flip effect on hover',
    keyframes: `@keyframes flip {
  0% {
    transform: perspective(400px) rotateY(0);
  }
  100% {
    transform: perspective(400px) rotateY(180deg);
  }
}`,
    animationCSS: `animation: flip 0.6s ease-in-out forwards;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'float-up',
    name: 'Float Up',
    category: 'hover',
    description: 'Smooth float upward on hover',
    keyframes: `@keyframes floatUp {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}`,
    animationCSS: `animation: floatUp 2s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },

  // ============ BUTTONS ============
  {
    id: 'ripple',
    name: 'Ripple',
    category: 'buttons',
    description: 'Expanding ripple effect on click',
    keyframes: `@keyframes ripple {
  0% {
    transform: scale(0);
    opacity: 0.5;
  }
  100% {
    transform: scale(4);
    opacity: 0;
  }
}`,
    animationCSS: `animation: ripple 0.6s linear;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'slide-fill',
    name: 'Slide Fill',
    category: 'buttons',
    description: 'Background slides in from left on hover',
    keyframes: `@keyframes slideFill {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(0);
  }
}`,
    animationCSS: `animation: slideFill 0.3s ease-out forwards;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'pulse-scale',
    name: 'Pulse Scale',
    category: 'buttons',
    description: 'Subtle pulse on hover',
    keyframes: `@keyframes pulseScale {
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.05);
  }
}`,
    animationCSS: `animation: pulseScale 1s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },

  // ============ BACKGROUNDS ============
  {
    id: 'gradient-shift',
    name: 'Gradient Shift',
    category: 'backgrounds',
    description: 'Smooth gradient color rotation',
    keyframes: `@keyframes gradientShift {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}`,
    animationCSS: `animation: gradientShift 5s ease infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'floating-bubbles',
    name: 'Floating Bubbles',
    category: 'backgrounds',
    description: 'Bubbles floating upward',
    keyframes: `@keyframes floatBubble {
  0% {
    transform: translateY(100vh) scale(0);
    opacity: 0;
  }
  50% {
    opacity: 0.8;
  }
  100% {
    transform: translateY(-100vh) scale(1);
    opacity: 0;
  }
}`,
    animationCSS: `animation: floatBubble 4s linear infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'pulse-background',
    name: 'Pulse Background',
    category: 'backgrounds',
    description: 'Background color pulsing',
    keyframes: `@keyframes pulseBg {
  0%, 100% {
    opacity: 0.3;
  }
  50% {
    opacity: 0.8;
  }
}`,
    animationCSS: `animation: pulseBg 2s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'shimmer',
    name: 'Shimmer',
    category: 'backgrounds',
    description: 'Glossy shine sweeping across',
    keyframes: `@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}`,
    animationCSS: `animation: shimmer 2s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },

  // ============ TEXT EFFECTS ============
  {
    id: 'typewriter',
    name: 'Typewriter',
    category: 'text',
    description: 'Characters appearing one by one',
    keyframes: `@keyframes typewriter {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}`,
    animationCSS: `animation: typewriter 3s steps(20) forwards;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'text-glow',
    name: 'Text Glow',
    category: 'text',
    description: 'Glowing text effect',
    keyframes: `@keyframes textGlow {
  0%, 100% {
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor;
  }
  50% {
    text-shadow: 0 0 20px currentColor, 0 0 30px currentColor, 0 0 40px currentColor;
  }
}`,
    animationCSS: `animation: textGlow 2s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'wave',
    name: 'Wave',
    category: 'text',
    description: 'Letters waving like ocean',
    keyframes: `@keyframes wave {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
}`,
    animationCSS: `animation: wave 1s ease-in-out infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
  {
    id: 'blink',
    name: 'Blink',
    category: 'text',
    description: 'Classic cursor blink effect',
    keyframes: `@keyframes blink {
  0%, 50% {
    opacity: 1;
  }
  51%, 100% {
    opacity: 0;
  }
}`,
    animationCSS: `animation: blink 1s step-end infinite;`,
    customizableProps: ['duration', 'color', 'size'],
    defaultColor: '#6366f1',
  },
];
