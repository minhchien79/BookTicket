import React, { Component } from "react";
import ThongTinHangGhe from "./ThongTinHangGhe";
import HangGhe from "./HangGhe";
import dataGhe from "./danhSachGhe.json";

export default class BookingTicket extends Component {
  renderHangGhe = () => {
    return dataGhe.map((hangGhe, index) => {
      return (
        <div key={index}>
          <HangGhe hangGhe={hangGhe} soHangGhe={index} />
        </div>
      );
    });
  };

  render() {
    return (
      <div
        className="bookingMovie"
        style={{
          position: "fixed",
          width: "100%",
          height: "100%",
          backgroundImage: "url('./img/bgmovie.jpg')",
          backgroundSize: "100%",
        }}
      >
        <div
          style={{
            position: "fixed",
            width: "100%",
            height: "100%",
            backgroundColor: "rgb(0,0,0,0.6)",
          }}
        ></div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-8 text-center">
              <div className="text-warning display-4">BOOKING TICKET</div>
              <div className="mt-3 text-light" style={{ fontSize: "25px" }}>
                MÀN HÌNH
              </div>
              <div
                className="mt-2"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <div className="screen"></div>
                {this.renderHangGhe()}
              </div>
            </div>
            <div className="col-4">
              <div style={{ fontSize: "35px" }} className="text-light mt-2 ">
                DANH SÁCH GHẾ CHỌN
              </div>
              <ThongTinHangGhe />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
