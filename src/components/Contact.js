import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'



function Contact() {
    return (
      <section id="contact">
       <div className="container" >
       <div className="row">
          <div className="cols">
            <h2 className="mt-4 services-text text-left" style={{paddingTop:'50px'}}>Contact</h2> {/* Add mt-4 class for top margin */}
          </div>
        </div>
        <div class="card-body">
        <h5 class="card-title services-text" style={{paddingTop:'50px', fontSize:'25px'}}>Kieth, Tucker <br />
        S.T.O.R.T.E <br />
        Owner & C.E.O</h5>
        <p class="card-text" style={{paddingTop:'100px', paddingBottom:'20px', fontFamily: 'Merriweather', color:'#3D3322',textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white', fontSize:'18px', fontWeight:'bold'}}>916-420-5764 <br /> Please give us a call <br /> for a full list of services offered.</p>
      </div>
        <div className="info-map">
                    S.T.O.R.T.E,
                    <br />
                    United States,
                    <br />
                    Sacramento, California
                    <span>Kieth, Tucker</span>
                </div>
                <div className='map-wrap'>
                    <MapContainer center={[38.575764, -121.478851]} zoom={13}>
                    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
                        <Marker position={[38.575764, -121.478851]}>
                            <Popup>Call for a quote. <br />916-420-5764</Popup>

                        </Marker>
                    </MapContainer>
                </div>
      </div>
      </section>
    );
  }

  export default Contact;