import React from 'react';
import './Sidebar.css';
import { MdRoom, MdSearch} from "react-icons/md";

function Sidebar() {
  return (
    <>
     <aside>
        <div className="header">
         <a className="logo" href="http://localhost:3000/" ><span ><MdRoom/>PlaceTop</span></a>
         <div className="menu">
           <ul>
             <a href="http://localhost:3000/mercados"><li  className="item-menu">Mercados</li></a>
             <a href="http://localhost:3000/restaurantes"><li  className="item-menu">Restaurantes</li></a>
             <a href="http://localhost:3000/padarias"><li  className="item-menu">Padarias</li></a>
             <a href="http://localhost:3000/hospitais"><li  className="item-menu">Hospitais</li></a>
             <a href="http://localhost:3000/hoteis"><li  className="item-menu">Hotéis</li></a>
             <a href="http://localhost:3000/promoçoes"><li  className="item-menu">Promoções</li></a>
             <a href="http://localhost:3000/servicos"><li  className="item-menu">Serviços</li></a>
             <a href="http://localhost:3000/servicos"><li  className="item-menu">Ingressos</li></a>
             <a href="http://localhost:3000/anunciar"><li>Fazer anúncio</li></a>
             
           </ul>
           
           
          </div>
          <div className="pesquisar">
              <input className="pesquisa" placeholder="Pesquisar"/>
              <button type="submit" className="butao"><MdSearch/></button>
          </div>
        </div>

      </aside>

    </>
  );
}

export default Sidebar;
