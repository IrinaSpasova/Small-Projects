/*
The HTML:

<section class="services">
  <h2>Our Services</h2>
  <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates, accusamus! Odio incidunt nemo dignissimos.</p>
  <div class="container">
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="card-text">
              <h4>Data Solutions</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis illo nulla.</p>
            </div>
            <div class="icon">
              <i class="fa fa-database"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="card-text">
              <h4>Email Broadcasts</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque, voluptatem ipsam.</p>
            </div>
            <div class="icon">
              <i class="fa fa-envelope"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="card-text">
              <h4>Targeted Marketing</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius in suscipit adipisci!</p>
            </div>
            <div class="icon">
              <i class="fa fa-crosshairs"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="card-text">
              <h4>Analytics</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, deleniti quos.</p>
            </div>
            <div class="icon">
              <i class="fa fa-chart-bar"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row mb-4">
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="card-text">
              <h4>Media Storage</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sapiente facilis ducimus!</p>
            </div>
            <div class="icon">
              <i class="fa fa-music"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="col">
        <div class="card">
          <div class="card-body">
            <div class="card-text">
              <h4>Identity Protection</h4>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem atque aut.</p>
            </div>
            <div class="icon">
              <i class="fa fa-mask"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="commitment">
  <h2>Our Commitment</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque autem a, dolorum rerum eveniet, beatae perspiciatis repudiandae natus ut eos fuga debitis voluptatem tempore quidem ex blanditiis id assumenda.</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quia quae vitae aperiam libero quam sint earum sequi nihil saepe perferendis molestias modi placeat ad odio, quisquam excepturi accusamus veritatis.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt accusantium corporis vero delectus sequi tempore asperiores quaerat officia itaque, commodi, reprehenderit quae dolore magnam soluta pariatur. Quis, nam voluptates!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea voluptate at harum aliquid, nam in repellat id consequatur, ipsam explicabo laudantium modi illum distinctio veniam est unde dolore fuga!</p>
</section>

<section class="features">
    <h2>Our Features</h2>
  <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur, beatae iusto! Adipisci voluptates voluptas odit error commodi molestiae quae, placeat quasi reiciendis sunt officiis qui vitae libero? Hic, commodi consequuntur!</p>
  <div class="columns">
    <div class="feature">
      <div class="icon"><i class="fa fa-user"></i></div>
      <h4>User Access</h4>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores vel dolore nulla enim, eos molestiae perspiciatis.</p>
    </div>
    <div class="feature">
      <div class="icon"><i class="fa fa-bell"></i></div>
      <h4>Notifications</h4>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. At, eum repudiandae corporis inventore provident corrupti ratione esse.</p>
    </div>
    <div class="feature">
      <div class="icon"><i class="fa fa-envelope"></i></div>
      <h4>Communication</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero incidunt voluptatibus nostrum totam sit alias obcaecati.</p>
    </div>
  </div>
  
</section>

<section class="commitment">
  <h2>Our Commitment</h2>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis doloremque autem a, dolorum rerum eveniet, beatae perspiciatis repudiandae natus ut eos fuga debitis voluptatem tempore quidem ex blanditiis id assumenda.</p>
  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repudiandae quia quae vitae aperiam libero quam sint earum sequi nihil saepe perferendis molestias modi placeat ad odio, quisquam excepturi accusamus veritatis.</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A deserunt accusantium corporis vero delectus sequi tempore asperiores quaerat officia itaque, commodi, reprehenderit quae dolore magnam soluta pariatur. Quis, nam voluptates!</p>
  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi ea voluptate at harum aliquid, nam in repellat id consequatur, ipsam explicabo laudantium modi illum distinctio veniam est unde dolore fuga!</p>
</section>
*/


/*
The CSS

body {
  color: #6084a4;
}

h1,h2,h3,h4,h5,h6 { color: #333; }

.features, .services, .commitment {
  text-align: center;
  padding: 20px;
  padding-top: 40px;
}

.services { background-color: #f7fafd; }
.commitment { background-color: #fff; }
.features { background-color: #f7fafd; }

.feature {
  opacity: 0;
  position: relative;
}

.services .card {
  border: none;
  box-shadow: 0 0 10px rgba(96,134,181,.3);
  opacity: 0;
  position: relative;
}

.card.animate, .feature.animate {
  animation-name: entrance;
  animation-duration: .5s;
  animation-fill-mode: forwards;
}

@keyframes entrance {
  from {
    opacity: 0;
    top: 100px;
  }
  to {
    opacity: 1;
    top: 0;
  }
}

.card-body {
  display: flex;
  text-align: right;
}

.card .icon {
  flex: 0 0 50px;
  margin-left: 10px;
}

.icon {
  width: 50px;
  height: 50px;
  background-color: #cdf1d8;
  border-radius: 50%;
  text-align: center;
  line-height: 50px;
  color: #44ce6f;
}

.card-text h4 {
  margin: 4px 0;
}

.columns {
  display: flex;
}

.feature {
  padding: 20px;
  text-align: left;
  background-color: #fff;
  margin: 5px;
  border: 1px dashed #93b2d8;
  box-shadow: 0 0 10px rgba(0,0,0,.1);
}

.feature .icon {
  display: inline-block;
  margin-bottom: 20px;
}

.feature h4 {
  margin: 4px 0;
}

.feature p {
  line-height: 26px;
}
*/



// use jQuery


function animateItems(items) {
  items.each(function(i) {
    var $this = $(this);
    setTimeout(function() {
      $this.addClass('animate');
    }, 100 * i);
  });
}

animateItems($('.services .card'));

function isFullyVisible(element) {
  var bottomOfElement = element.offset().top + element.height();
  var isVisible = bottomOfElement <= ($(window).scrollTop() + $(window).height());
  return isVisible;
}

$(window).scroll(function() {
  if (isFullyVisible($('.feature').first())) {
    animateItems($('.feature'));
  }
});
