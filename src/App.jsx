import "./App.css";
import { useState } from "react";
import aliRazaImage from "./assets/icon.png";

const App = () => {
  const [counter, setCounter] = useState(0);

  return (
    <div className="app">

      {/* Profile */}
      <div className="profile">
        <img
          src={aliRazaImage}
          alt="Ali Raza"
          className="profile-image"
        />

        <div className="profile-info">
          <span className="profile-name">Ali Raza</span>
          <span className="profile-role">Digital Tasbih</span>
        </div>
      </div>

      {/* Background glow */}
      <div className="glow glow-one"></div>
      <div className="glow glow-two"></div>

      <div className="main-container">

        {/* Header */}
        <header className="header">

          <div className="mosque-icon">☪</div>

          <p className="subtitle">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ
          </p>

          <h1>Digital Tasbih</h1>

          <p className="header-description">
            Remember Allah • Find Peace • Keep Dhikr
          </p>

        </header>


        {/* Tasbih Counter */}
        <div className="tasbih-card">

          <div className="card-decoration">✦</div>

          <p className="dhikr-title">
            DHIKR COUNTER
          </p>

          <div className="counter-circle">

            <div className="circle-inner">

              <span className="counter-number">
                {counter}
              </span>

              <span className="counter-text">
                Dhikr
              </span>

            </div>

          </div>


          {/* Buttons */}
          <div className="buttons">

            <button
              className="counter-btn decrease"
              onClick={() => setCounter(counter - 1)}
            >
              −
            </button>

            <button
              className="tasbih-button"
              onClick={() => setCounter(counter + 1)}
            >
              TAP TO COUNT
            </button>

            <button
              className="counter-btn increase"
              onClick={() => setCounter(counter + 1)}
            >
              +
            </button>

          </div>


          {/* Reset */}
          <button
            className="reset-btn"
            onClick={() => setCounter(0)}
          >
            ↻ &nbsp; RESET
          </button>

        </div>


        {/* Ayat Al-Kursi */}
        <section className="ayah-card">

          <div className="ayah-header">

            <span className="ornament">۞</span>

            <div>

              <p className="ayah-small">
                SURAH AL-BAQARAH
              </p>

              <h2>
                آية الكرسي
              </h2>

              <p className="ayah-reference">
                Ayat al-Kursi • 2:255
              </p>

            </div>

            <span className="ornament">۞</span>

          </div>


          {/* Arabic */}
          <div className="arabic-container">

            <p className="arabic">
              ٱللَّهُ لَآ إِلَٰهَ إِلَّا هُوَ ٱلْحَىُّ
              ٱلْقَيُّومُ ۚ لَا تَأْخُذُهُۥ سِنَةٌۭ وَلَا
              نَوْمٌۭ ۚ لَّهُۥ مَا فِى ٱلسَّمَٰوَٰتِ
              وَمَا فِى ٱلْأَرْضِ ۗ مَن ذَا ٱلَّذِى
              يَشْفَعُ عِندَهُۥٓ إِلَّا بِإِذْنِهِۦ ۚ
              يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا
              خَلْفَهُمْ ۖ وَلَا يُحِيطُونَ بِشَىْءٍۢ
              مِّنْ عِلْمِهِۦٓ إِلَّا بِمَا شَآءَ ۚ
              وَسِعَ كُرْسِيُّهُ ٱلسَّمَٰوَٰتِ
              وَٱلْأَرْضَ ۖ وَلَا يَـُٔودُهُۥ
              حِفْظُهُمَا ۚ وَهُوَ ٱلْعَلِىُّ
              ٱلْعَظِيمُ
            </p>

            <span className="ayah-number">
              ٢٥٥
            </span>

          </div>


          {/* Translation */}
          <div className="translation">

            <h3>
              English Translation
            </h3>

            <p>
              Allah — there is no deity except Him, the Ever-Living,
              the Sustainer of all existence. Neither drowsiness overtakes
              Him nor sleep. To Him belongs whatever is in the heavens
              and whatever is on the earth. Who is it that can intercede
              with Him except by His permission? He knows what is before
              them and what will be after them, and they encompass not
              a thing of His knowledge except what He wills. His Kursi
              extends over the heavens and the earth, and their preservation
              tires Him not. And He is the Most High, the Most Great.
            </p>

          </div>

        </section>


        {/* Footer */}
        <footer>

          <p>
            مَا شَاءَ اللَّهُ
          </p>

          <span>
            May your heart find peace through remembrance.
          </span>

        </footer>

      </div>

    </div>
  );
};

export default App;