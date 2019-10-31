import React from 'react';

import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';

import { Container, ProductTable, Total } from './styles';

export default function Cart() {
  return (
    <Container>
      <ProductTable>
        <thead>
          <tr>
            <th />
            <th>PRODUTO</th>
            <th>QTD</th>
            <th>SUBTOTAL</th>
            <th />
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img
                src="https://static.netshoes.com.br/produtos/tenis-nike-air-max-command-masculino/18/HZM-0354-118/HZM-0354-118_detalhe2.jpg?ims=326x"
                alt="tenis"
              />
            </td>
            <td>
              <strong>Air max</strong>
              <span>r$400,000</span>
            </td>
            <td>
              <div>
                <button type="button">
                  <MdRemoveCircleOutline size={20} color="#7195c1" />
                </button>
                <input type="number" readOnly value={2} />
                <button type="button">
                  <MdAddCircleOutline size={20} color="#7195c1" />
                </button>
              </div>
            </td>
            <td>
              <strong>r$800,00</strong>
            </td>
            <button type="button">
              <MdDelete size={20} color="#7195c1" />
            </button>
          </tr>
        </tbody>
      </ProductTable>
      <footer>
        <button type="button">Finalizar pedido</button>
        <Total>
          <span>TOTAL</span>
          <strong>R$1920,28</strong>
        </Total>
      </footer>
    </Container>
  );
}
