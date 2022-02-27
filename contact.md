title of the page is the same

header begins right after body an contains the nav¨

main class contact covers entire rest of the page until right before footer


this is the form
  <main class="contact">
      <h1>Contact</h1>
  <form method="POST">
        <div class="form-wrapper">
          <section>
            <label for="name">Full name</label>
            <input type="text" id="name" name="name" />
            <label for="email">Email</label>
            <input type="email" id="email" name="Email" />
            <label for="guitar">Guitar</label>
            <select id="guitar" name="Guitar">
              <option value="Adirondack Red">Adirondack Red</option>
              <option value="Adirondack Blue">Adirondack Blue</option>
              <option value="Adirondack Green">Adirondack Green</option>
            </select>
            <div>
              <input type="checkbox" id="email-updates" name="email-updates" />
              <label for="email-updates">Sign up for email updates.</label>
            </div>
          </section>
          <section>
            <label for="message">Message</label>
            <textarea id="message" name="message"></textarea>
          </section>
        </div>
        <input type="submit" value="Send Now" class="cta cta-large" />
      </form>
          </main>


          image with alt text  <img src="images/home-info.jpg" alt="Hand strumming guitar" class="selling-points__images" />