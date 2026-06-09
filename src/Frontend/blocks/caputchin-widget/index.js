/**
 * Editor registration for the Caputchin block.
 *
 * The block is server-rendered (save returns null), so the editor only needs a
 * static placeholder. Written against the global wp.* runtime so no build step
 * is required to ship the plugin.
 */
( function ( blocks, element, blockEditor, i18n ) {
	var el = element.createElement;
	var __ = i18n.__;

	blocks.registerBlockType( 'caputchin/widget', {
		edit: function () {
			var blockProps = blockEditor.useBlockProps( {
				style: {
					border: '1px dashed #8c8f94',
					borderRadius: '6px',
					padding: '16px',
					textAlign: 'center',
					color: '#50575e'
				}
			} );
			return el(
				'div',
				blockProps,
				el( 'strong', null, 'Caputchin' ),
				el(
					'p',
					{ style: { margin: '4px 0 0' } },
					__( 'The verification widget renders here on the published page.', 'caputchin' )
				)
			);
		},
		save: function () {
			return null;
		}
	} );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.i18n );
