import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="grid wide">
            <div className="row about">
                <p className="about__rules">
                    This website as part of Hlsolutions program. The materials contained on this website are procided for genaral information only and do not constitute any form ot advice. 
                    HLS assumes on no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.
                </p>
                <h4 className="about__copyright">Copyright 2021 HLS</h4>
            </div>
        </div>
    </footer>
  );
}

export default Footer;