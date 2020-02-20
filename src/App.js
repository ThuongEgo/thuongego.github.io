import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <section className="start">
        <div className="block_start">
          <div className="container fluid">
            <div className="row justify-content-center align-items-center">
              <div className="col-xl-5 col-lg-5 order-last">
                <div className="user_img">
                  <div className="element">
                    <img src="images/element_square.png" alt="s" />
                  </div>
                  <div className="element_circle_yellow">
                    <img src="images/element_yellow_circle.png" alt="" />
                  </div>
                  <div className="element_circle_pink">
                    <img src="images/element_pink_circle.png" alt="" />
                  </div>
                  <div className="element_circle_small_pink">
                    <img src="images/element_pink_circle_small.png" alt="" />
                  </div>
                  <div className="element_square">
                    <img src="images/element_square_yes.png" alt="" />
                  </div>
                  <div className="element_circle_purple">
                    <img src="images/element_purple_circle.png" alt="" />
                  </div>
                  <div className="element_line">
                    <img src="images/line.png" alt="" />
                  </div>
                  <div className="element_circle_gray">
                    <img src="images/element_gray_circle.png" alt="" />
                  </div>
                  <img src="images/avatar.jpg" alt="" />
                </div>
              </div>
              <div className="col-xl-4 col-lg-4 order-first">
                <div className="start_info clearfix">
                  <span className="RedTextColor">Xin chào, tôi là</span>
                  <div className="text_effect" data-text="Đào Quý Thương">Đào Quý Thương</div>
                  <h4 className="clearfix"><i className="fab fa-connectdevelop"></i> Designer / Developer</h4>
                  <p className="clearfix">Tôi năm nay đã 28 tuổi đến từ Việt Nam  Đang sinh sống tại Hà Nội </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
