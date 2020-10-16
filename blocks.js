console.log( "I'm loaded!" );

wp.domReady(() => {
    // image
    wp.blocks.unregisterBlockStyle('core/image', 'circle-mask');
    wp.blocks.unregisterBlockStyle('core/image', 'default');
    // quote
    wp.blocks.unregisterBlockStyle('core/quote', 'default');
    wp.blocks.unregisterBlockStyle('core/quote', 'large');
    // button
    wp.blocks.unregisterBlockStyle('core/button', 'fill');
    wp.blocks.unregisterBlockStyle('core/button', 'outline');
    // pullquote
    wp.blocks.unregisterBlockStyle('core/pullquote', 'default');
    wp.blocks.unregisterBlockStyle('core/pullquote', 'solid-color');
    // separator
    wp.blocks.unregisterBlockStyle('core/separator', 'default');
    wp.blocks.unregisterBlockStyle('core/separator', 'wide');
    wp.blocks.unregisterBlockStyle('core/separator', 'dots');
    // table
    wp.blocks.unregisterBlockStyle('core/table', 'regular');
    wp.blocks.unregisterBlockStyle('core/table', 'stripes');
    // social-links
    wp.blocks.unregisterBlockStyle('core/social-links', 'default');
    wp.blocks.unregisterBlockStyle('core/social-links', 'logos-only');
    wp.blocks.unregisterBlockStyle('core/social-links', 'pill-shape');
} );