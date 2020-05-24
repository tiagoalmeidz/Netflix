import React from "react";

import { Container } from "./styles";
import { Button } from "../../../Button";
import { MdClose, MdCheck } from "react-icons/md";

function PricesContent() {
  return (
    <Container>
      <div className="tab-content">
        <div className="tab-top-content">
          <span>Choose one plan and watch everything on Netflix.</span>
          <Button className="btn">try it now</Button>
        </div>
        <div className="tab-bottom-content">
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Basic</th>
                <th>Standard</th>
                <th>Premium</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Monthly price</td>
                <td>$9.99</td>
                <td>$13.99</td>
                <td>$16.99</td>
              </tr>
              <tr>
                <td>HD available</td>
                <td>
                  <MdClose size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
              </tr>
              <tr>
                <td>Ultra HD available</td>
                <td>
                  <MdClose size={20} />
                </td>
                <td>
                  <MdClose size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
              </tr>
              <tr>
                <td>Screens you can watch on at the same time</td>
                <td>1</td>
                <td>2</td>
                <td>4</td>
              </tr>
              <tr>
                <td>Watch on your laptop, TV, phone and tablet</td>
                <td>
                  <MdCheck size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
              </tr>
              <tr>
                <td>Unlimited movies and TV shows</td>
                <td>
                  <MdCheck size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
              </tr>
              <tr>
                <td>Cancel anytime</td>
                <td>
                  <MdCheck size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
                <td>
                  <MdCheck size={20} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
}

export default PricesContent;
