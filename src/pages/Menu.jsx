import React from "react";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <div className="background-menu">
    <div className="container menu-container">

    

      <h2 className="category-header">
        Black <span className="thin">Coffee</span>
      </h2>

      <div className="menu-content-Wrapper">
        <img
          src="/WhatsApp Image 2026-04-21 at 5.32.19 PM.jpeg"
          alt="Black Coffee"
        />

        <table className="menu-table">
          <thead className="menu-size">
            <tr>
              <th></th>
              <th>Small</th>
              <th>Medium</th>
              <th>Large</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="item-name">Americano</td>
              <td className="price">300,000</td>
              <td className="price">350,000</td>
              <td className="price">400,000</td>
            </tr>

            <tr>
              <td className="item-name">Black Coffee</td>
              <td className="price">300,000</td>
              <td className="price">350,000</td>
              <td className="price">400,000</td>
            </tr>

            <tr>
              <td className="item-name">Single Longo</td>
              <td className="price">250,000</td>
              <td className="price">300,000</td>
              <td className="price">350,000</td>
            </tr>

            <tr>
              <td className="item-name">Triple Espresso</td>
              <td className="price">200,000</td>
              <td className="price">250,000</td>
              <td className="price">350,000</td>
            </tr>

            <tr>
              <td className="item-name">Double Espresso</td>
              <td className="price">300,000</td>
              <td className="price">400,000</td>
              <td className="price">450,000</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h2 className="category-header">
        Iced <span className="thin">Beverages</span>
      </h2>

      <div className="menu-content-Wrapper">
        <img src="/n.jpeg" alt="Iced Beverages" />

        <table className="menu-table">
          <thead>
            <tr>
              <th></th>
              <th>Small</th>
              <th>Medium</th>
              <th>Large</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="item-name">Iced Americano</td>
              <td className="price">350,000</td>
              <td className="price">400,000</td>
              <td className="price">450,000</td>
            </tr>

            <tr>
              <td className="item-name">Iced Latte</td>
              <td className="price">350,000</td>
              <td className="price">450,000</td>
              <td className="price">500,000</td>
            </tr>

            <tr>
              <td className="item-name">Iced Mocha</td>
              <td className="price">400,000</td>
              <td className="price">500,000</td>
              <td className="price">550,000</td>
            </tr>
          </tbody>
        </table>
      </div>

   
      <h2 className="category-header">
        Blended <span className="thin">Drinks</span>
      </h2>

      <div className="menu-content-Wrapper">
        <img src="/m.jpeg" alt="Blended Drinks" />

        <table className="menu-table">
          <thead>
            <tr>
              <th></th>
              <th>Small</th>
              <th>Medium</th>
              <th>Large</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td className="item-name">Coffee Frappe</td>
              <td className="price">300,000</td>
              <td className="price">350,000</td>
              <td className="price">400,000</td>
            </tr>

            <tr>
              <td className="item-name">Espresso Frappe</td>
              <td className="price">300,000</td>
              <td className="price">350,000</td>
              <td className="price">400,000</td>
            </tr>

            <tr>
              <td className="item-name">Caramel Frappe</td>
              <td className="price">250,000</td>
              <td className="price">300,000</td>
              <td className="price">350,000</td>
            </tr>

            <tr>
              <td className="item-name">Strawberry Frappe</td>
              <td className="price">200,000</td>
              <td className="price">250,000</td>
              <td className="price">350,000</td>
            </tr>

            <tr>
              <td className="item-name">Matcha Frappe</td>
              <td className="price">300,000</td>
              <td className="price">400,000</td>
              <td className="price">450,000</td>
            </tr>
          </tbody>
        </table>
      </div>
</div>
    </div>
  );
}

export default Menu;