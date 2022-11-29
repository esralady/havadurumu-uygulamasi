import yagmurlu from "../../Resimler/rainy.jpg";
import bulutlu from "../../Resimler/bulutlu.jpg";
import günesli from "../../Resimler/günesli.jpg";
import karlı from "../../Resimler/karlı.jpg";
import sisli from "../../Resimler/sisli.jpg";
import firtinali from "../../Resimler/Storms-Images.jpg";
import gokkusagi from "../../Resimler/gokkusagi.jpg";


function ResimCek({durum}) {
    switch (durum) {
    case "Rain": 
      return <img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />
      case "Drizzle":
        return<img className="arkaplan-resim" src={yagmurlu} alt="yagmurlu" />
        case "Clear":
            return<img className="arkaplan-resim" src={günesli} alt="günesli" />
            case "Mist":
            return<img className="arkaplan-resim" src={sisli} alt="sisli" />
            case "Snow":
            return<img className="arkaplan-resim" src={karlı} alt="karlı" />
            case "Storm":
            return<img className="arkaplan-resim" src={firtinali} alt="firtinali" />
            case "Clouds":
            return<img className="arkaplan-resim" src={bulutlu} alt="bulutlu" />
            default:
                return <img className="arkaplan-resim" src={gokkusagi} alt="gokkusagi" />
    }
    

}

export default ResimCek;