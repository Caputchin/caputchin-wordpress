/**
 * Editor registration for the Caputchin Game block.
 *
 * Server-rendered (save returns null). The editor shows a placeholder plus an
 * Inspector (sidebar) panel for the game-host attributes, so they can be set
 * without touching block markup. Written against the global wp.* runtime so no
 * build step is required.
 */
( function ( blocks, element, blockEditor, components, i18n ) {
	var el = element.createElement;
	var Fragment = element.Fragment;
	var __ = i18n.__;
	var InspectorControls = blockEditor.InspectorControls;
	var PanelBody = components.PanelBody;
	var TextControl = components.TextControl;
	var SelectControl = components.SelectControl;
	var ToggleControl = components.ToggleControl;

	function text( props, attr, label, help ) {
		return el( TextControl, {
			label: label,
			help: help || undefined,
			value: props.attributes[ attr ] || '',
			onChange: function ( value ) {
				var update = {};
				update[ attr ] = value;
				props.setAttributes( update );
			}
		} );
	}

	blocks.registerBlockType( 'caputchin/game', {
		edit: function ( props ) {
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
				Fragment,
				null,
				el(
					InspectorControls,
					null,
					el(
						PanelBody,
						{ title: __( 'Game', 'caputchin' ), initialOpen: true },
						text( props, 'game', __( 'Game', 'caputchin' ), __( 'A marketplace game id, e.g. caputchin/games/leaf-memory.', 'caputchin' ) ),
						text( props, 'games', __( 'Games (random)', 'caputchin' ), __( 'Comma-separated ids; one is picked per visit. Overrides Game.', 'caputchin' ) ),
						text( props, 'game-src', __( 'Game source URL', 'caputchin' ), __( 'A self-hosted game script URL.', 'caputchin' ) ),
						el( SelectControl, {
							label: __( 'Layout', 'caputchin' ),
							value: props.attributes.layout || 'auto',
							options: [
								{ label: __( 'Auto', 'caputchin' ), value: 'auto' },
								{ label: __( 'Inline', 'caputchin' ), value: 'inline' },
								{ label: __( 'Modal', 'caputchin' ), value: 'modal' },
								{ label: __( 'Fullscreen', 'caputchin' ), value: 'fullscreen' }
							],
							onChange: function ( value ) {
								props.setAttributes( { layout: value } );
							}
						} )
					),
					el(
						PanelBody,
						{ title: __( 'Appearance', 'caputchin' ), initialOpen: false },
						text( props, 'skin', __( 'Theme', 'caputchin' ), __( 'auto, light, dark, or a preset name.', 'caputchin' ) ),
						text( props, 'locale', __( 'Language', 'caputchin' ), __( 'A code such as en or ar.', 'caputchin' ) ),
						text( props, 'width', __( 'Width', 'caputchin' ), __( 'full or a pixel number.', 'caputchin' ) ),
						text( props, 'height', __( 'Height', 'caputchin' ), __( 'full or a pixel number.', 'caputchin' ) ),
						el( ToggleControl, {
							label: __( 'Skip verification (game only)', 'caputchin' ),
							checked: !! props.attributes[ 'no-verify' ],
							onChange: function ( value ) {
								props.setAttributes( { 'no-verify': value } );
							}
						} )
					)
				),
				el(
					'div',
					blockProps,
					el( 'strong', null, 'Caputchin Game' ),
					el(
						'p',
						{ style: { margin: '4px 0 0' } },
						__( 'The game challenge renders here on the published page. Configure it in the block sidebar.', 'caputchin' )
					)
				)
			);
		},
		save: function () {
			return null;
		}
	} );
} )( window.wp.blocks, window.wp.element, window.wp.blockEditor, window.wp.components, window.wp.i18n );
