// Butterfly Component - butterfly.js

const ButterflyComponent = ({ position, wingsStopped }) => {
    return React.createElement('div', {
        className: 'butterfly-container',
        style: {
            top: `${position.top}px`,
            left: `${position.left}px`
        }
    },
        React.createElement('svg', {
            className: `butterfly-wings ${wingsStopped ? 'stopped' : ''}`,
            width: "70",
            height: "70",
            viewBox: "0 0 120 120",
            xmlns: "http://www.w3.org/2000/svg"
        },
            React.createElement('defs', null,
                React.createElement('radialGradient', { id: 'wingGradient1', cx: '30%', cy: '30%' },
                    React.createElement('stop', { offset: '0%', stopColor: '#FFD700', stopOpacity: '0.9' }),
                    React.createElement('stop', { offset: '40%', stopColor: '#FFA500', stopOpacity: '0.85' }),
                    React.createElement('stop', { offset: '100%', stopColor: '#FF8C00', stopOpacity: '0.8' })
                ),
                React.createElement('radialGradient', { id: 'wingGradient2', cx: '40%', cy: '40%' },
                    React.createElement('stop', { offset: '0%', stopColor: '#FFED4E', stopOpacity: '0.8' }),
                    React.createElement('stop', { offset: '50%', stopColor: '#FFB347', stopOpacity: '0.85' }),
                    React.createElement('stop', { offset: '100%', stopColor: '#FF8C00', stopOpacity: '0.75' })
                )
            ),
            React.createElement('g', { transform: 'translate(60,60)' },
                // Left upper wing
                React.createElement('ellipse', { cx: '-22', cy: '-15', rx: '28', ry: '38', fill: 'url(#wingGradient1)', opacity: '0.95', transform: 'rotate(-25 -22 -15)', stroke: '#D2691E', strokeWidth: '0.8' }),
                React.createElement('ellipse', { cx: '-20', cy: '-13', rx: '22', ry: '30', fill: 'url(#wingGradient2)', opacity: '0.8', transform: 'rotate(-25 -20 -13)' }),
                React.createElement('ellipse', { cx: '-18', cy: '-18', rx: '8', ry: '12', fill: '#FFE55C', opacity: '0.7', transform: 'rotate(-25 -18 -18)' }),
                React.createElement('circle', { cx: '-24', cy: '-8', r: '5', fill: '#FFF8DC', opacity: '0.6' }),
                React.createElement('circle', { cx: '-28', cy: '-20', r: '3', fill: '#FFFACD', opacity: '0.5' }),
                
                // Left lower wing
                React.createElement('ellipse', { cx: '-28', cy: '18', rx: '22', ry: '28', fill: 'url(#wingGradient1)', opacity: '0.9', transform: 'rotate(15 -28 18)', stroke: '#D2691E', strokeWidth: '0.8' }),
                React.createElement('ellipse', { cx: '-26', cy: '20', rx: '16', ry: '20', fill: 'url(#wingGradient2)', opacity: '0.75', transform: 'rotate(15 -26 20)' }),
                React.createElement('circle', { cx: '-30', cy: '22', r: '4', fill: '#FFF8DC', opacity: '0.6' }),
                
                // Right upper wing
                React.createElement('ellipse', { cx: '22', cy: '-15', rx: '28', ry: '38', fill: 'url(#wingGradient1)', opacity: '0.95', transform: 'rotate(25 22 -15)', stroke: '#D2691E', strokeWidth: '0.8' }),
                React.createElement('ellipse', { cx: '20', cy: '-13', rx: '22', ry: '30', fill: 'url(#wingGradient2)', opacity: '0.8', transform: 'rotate(25 20 -13)' }),
                React.createElement('ellipse', { cx: '18', cy: '-18', rx: '8', ry: '12', fill: '#FFE55C', opacity: '0.7', transform: 'rotate(25 18 -18)' }),
                React.createElement('circle', { cx: '24', cy: '-8', r: '5', fill: '#FFF8DC', opacity: '0.6' }),
                React.createElement('circle', { cx: '28', cy: '-20', r: '3', fill: '#FFFACD', opacity: '0.5' }),
                
                // Right lower wing
                React.createElement('ellipse', { cx: '28', cy: '18', rx: '22', ry: '28', fill: 'url(#wingGradient1)', opacity: '0.9', transform: 'rotate(-15 28 18)', stroke: '#D2691E', strokeWidth: '0.8' }),
                React.createElement('ellipse', { cx: '26', cy: '20', rx: '16', ry: '20', fill: 'url(#wingGradient2)', opacity: '0.75', transform: 'rotate(-15 26 20)' }),
                React.createElement('circle', { cx: '30', cy: '22', r: '4', fill: '#FFF8DC', opacity: '0.6' }),
                
                // Body
                React.createElement('ellipse', { cx: '0', cy: '2', rx: '4', ry: '28', fill: '#3D2817', stroke: '#2C1810', strokeWidth: '0.5' }),
                React.createElement('ellipse', { cx: '0', cy: '0', rx: '3.5', ry: '8', fill: '#4A4A4A' }),
                React.createElement('ellipse', { cx: '0', cy: '8', rx: '3', ry: '6', fill: '#3D2817' }),
                React.createElement('ellipse', { cx: '0', cy: '16', rx: '2.5', ry: '5', fill: '#4A4A4A' }),
                React.createElement('ellipse', { cx: '0', cy: '22', rx: '2', ry: '4', fill: '#3D2817' }),
                
                // Head
                React.createElement('circle', { cx: '0', cy: '-16', r: '5', fill: '#2C2C2C', stroke: '#1A1A1A', strokeWidth: '0.5' }),
                React.createElement('circle', { cx: '-1.5', cy: '-16', r: '1.2', fill: '#4A4A4A' }),
                React.createElement('circle', { cx: '1.5', cy: '-16', r: '1.2', fill: '#4A4A4A' }),
                
                // Antennae
                React.createElement('path', { d: 'M -1,-16 Q -6,-26 -8,-32', stroke: '#2C2C2C', strokeWidth: '1', fill: 'none', strokeLinecap: 'round' }),
                React.createElement('path', { d: 'M 1,-16 Q 6,-26 8,-32', stroke: '#2C2C2C', strokeWidth: '1', fill: 'none', strokeLinecap: 'round' }),
                React.createElement('circle', { cx: '-8', cy: '-32', r: '1.8', fill: '#3D2817' }),
                React.createElement('circle', { cx: '8', cy: '-32', r: '1.8', fill: '#3D2817' }),
                
                // Body segments
                React.createElement('ellipse', { cx: '0', cy: '5', rx: '1.5', ry: '2', fill: '#8B7355', opacity: '0.3' }),
                React.createElement('ellipse', { cx: '0', cy: '12', rx: '1.2', ry: '2', fill: '#8B7355', opacity: '0.3' }),
                React.createElement('ellipse', { cx: '0', cy: '19', rx: '1', ry: '1.5', fill: '#8B7355', opacity: '0.3' })
            )
        )
    );
};

window.ButterflyComponent = ButterflyComponent;