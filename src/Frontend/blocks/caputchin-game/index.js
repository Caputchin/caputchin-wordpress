/**
 * Editor registration for the Caputchin Game block.
 *
 * Server-rendered (save returns null), so the editor shows a static placeholder.
 * Written against the global wp.* runtime so no build step is required.
 */
( function ( blocks, element, blockEditor, i18n ) {
	var el = element.createElement;
	var __ = i18n.__;

	blocks.registerBlockType( 'caputchin/game', {
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
				el( 'strong', null, 'Caputchin Game' ),
				el(
					'p',
					{ style: { margin: '4px 0 0' } },
					__( 'The game challenge renders here on the published page. Set the game in the block markup.', 'caputchin' )
				)
			);
		},
		save: function () {
			return null;
		}
	} );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.i18n );
