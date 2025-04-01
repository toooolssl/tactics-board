import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Ball from '../pitch/Ball';

class BallEdit extends Component {
  // Renderiza el recurso SVG sin capturar eventos (la imagen en sí)
  ballImage() {
    const { ballHref } = this.props;
    return ballHref ? (
      <g transform="translate(-30 -30)">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="60"
          height="60"
          viewBox="0 0 60 60"
        >
          <image
            href={ballHref}
            width="60"
            height="60"
            style={{ pointerEvents: 'none' }}
          />
        </svg>
      </g>
    ) : null;
  }

  render() {
    const b = this.props.ball;
    const editID = this.props.isEdit ? b.id : null;
    const editClassName = this.props.isEdit ? 'draggable' : '';
    // 'bc' + b.color se supone que define el color mediante CSS en cada caso
    const className =
      'ball bc' + b.color + (this.props.isPrevFrame ? ' transparent' : '');
    const transform = `translate(${b.pos.x} ${b.pos.y})`;

    // Si b.color es 4, usamos el SVG externo y añadimos un <circle> encima
    // para capturar los eventos de arrastre sin mostrar cambios en la apariencia.
    if (b.color === 4) {
      return (
        <g className={className} transform={transform}>
          {this.ballImage()}
          {/* Círculo invisible que actúa como "hit area"
              Se usa fill con valor 'rgba(0,0,0,0)' para que sea absolutamente transparente,
              y style pointerEvents "all" para que capture los clics.
              Al estar declarado después, se posiciona por encima del SVG. */}
          <circle
            r="30"
            fill="rgba(0,0,0,0)"
            style={{ pointerEvents: 'all' }}
            className={editClassName}
            data-ref={editID}
          />
        </g>
      );
    }

    // Para los otros balones, se renderiza el círculo original (sin fill explícito,
    // de modo que el color se defina mediante las clases CSS, tal como lo manejabas).
    return (
      <g className={className} transform={transform}>
        <circle
          r="30"
          className={editClassName}
          strokeWidth="5"
          strokeOpacity="0.5"
          data-ref={editID}
        />
      </g>
    );
  }
}

BallEdit.defaultProps = {
  ball: null,
  isEdit: true,
  isPrevFrame: false,
  ballHref: ''
};

BallEdit.propTypes = {
  ball: PropTypes.instanceOf(Ball),
  isEdit: PropTypes.bool,
  isPrevFrame: PropTypes.bool,
  ballHref: PropTypes.string,
};

export default BallEdit;
