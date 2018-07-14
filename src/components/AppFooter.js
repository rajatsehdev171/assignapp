import React, { Component } from 'react';

class AppFooter extends Component {
  
  render() {
    return (
      <div>
          <footer id='footer'>
              <div className='row'>
                   <div className="col-12 footsec">
                    <ul className="optlist">
                        <li><a href="">About</a></li>
                        <li><a href="">Contact</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">Return Policy</a></li>
                    </ul>
                </div>
                   </div>
           
          </footer>
       </div>
    );
  }
}

export default AppFooter;