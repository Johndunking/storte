


function About() {
    return (
      <section id="about">
         <div class="container text-center">
         <div className="row">
          <div className="col">
            <h2 className="mt-4 services-text">Pricing & Garuntee</h2> {/* Add mt-4 class for top margin */}
          </div>
        </div>
            <div class="row">
              <div class="col">
              <div class="card" style={{width: '28rem', backgroundColor: 'rgba(230, 226, 216, 0.5)', fontFamily:'agbalumo', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',}}>
                <div class="card-body">
                  <h5 class="card-title">Big or small we do it all!</h5>
                  <p class="card-text" style={{fontFamily:'Merriweather', fontSize:'12px'}}>Regular rate: 4+ hours = $200 <br /> Senior and low income rates: 4+ hours = $150 <br /> Call 1-888-888-8888 for a consult!</p>
                </div>
                <img src="https://plus.unsplash.com/premium_photo-1663133656712-09e5fc257e1c?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29uc3RydWN0aW9uJTIwdGh1bWJzJTIwdXB8ZW58MHx8MHx8fDA%3D" class="card-img-bottom" alt="..."  />
              </div>
              </div>
              <div class="col">
              <div class="card" style={{width: '28rem', backgroundColor: 'rgba(230, 226, 216, 0.5)', fontFamily:'agbalumo', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',}}>
                  <div class="card-body">
                    <h5 class="card-title">All work is garunteed!</h5>
                    <p class="card-text" style={{fontFamily:'Merriweather', fontSize:'12px'}}>Proudly serving any and all communities in Sacramento! <br /> Please give us a call at 1-888-888-8888 first for a full list of services offered.</p>
                  </div>
                  <img src="https://plus.unsplash.com/premium_photo-1661696478346-7a13f1731fbd?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGhhbmRzaGFrZSUyMGNvbnN0cnVjdGlvbnxlbnwwfHwwfHx8MA%3D%3D" class="card-img-bottom" alt="..."/>
                </div>
              </div>
              <div class="col">
              <div class="card" style={{width: '28rem', backgroundColor: 'rgba(230, 226, 216, 0.5)', fontFamily:'agbalumo', textShadow: '-1px 0 white, 0 1px white, 1px 0 white, 0 -1px white',}}>
                  <div class="card-body">
                    <h5 class="card-title">Emergency calls</h5>
                    <p class="card-text" style={{fontFamily:'Merriweather', fontSize:'12px'}}>$50/hr conusltation. <br />1-888-888-8888</p>
                  </div>
                  <img src="https://plus.unsplash.com/premium_photo-1661695264232-673bb4baf7db?auto=format&fit=crop&q=60&w=800&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29uc3RydWN0aW9uJTIwdGh1bWJzJTIwdXB8ZW58MHx8MHx8fDA%3D" class="card-img-bottom" alt="..."/>
                </div>
              </div>
            </div>
          </div>
      </section>
    );
  }

  export default About;