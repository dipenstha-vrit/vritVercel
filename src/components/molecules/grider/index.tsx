import Text from "@/components/ui/text";
import React from "react";


const Grider = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 border">
      {/* Sticky left panel */}
      <div className="border top-0 z-10 left-0 sticky bg-white">1</div>

      {/* Scrollable right panel */}
      <div className="border right-panel">
        <Text>
          {/* Long content */}
          asdasfsdgasdfaskdfblajkvdbfklasbdkjfabsndkfjbasdkjbfaksdbgasjkdbgkjasdbfjkasbdgjbadsfjkgaksdjbgakjsdbgkjasbdgkjasbdgkjasbdkjgbasdkjgbasjdjlkanclknfasdnfcasdf
          jkasdnfkajsndkfjbasdlbjfak sjbdfa sdjbfakjsdbfkajsbdkjf
          isdbfjbaskdjfaksjdfbakeuib jkdbafk askdufaksdjbfkasdb jabsdkj
          bfjksbdfbasi bdjkabfkjasdbiufbasidf kjsbd jkfajksd auisbd uab fad
          kakfbaskdbfaksdbfjasbdk baskd bfksa bdkbfiasbd fkasbfakdausbdkbfa
          skjdbfkbsakudf kasdn ufbsd nfasndiofnaosidn foisdn inf oiasndoifn
          oiasndof inisoandifnao idnfoian oidnaoisnf oasidn foansd
          oanfsdonafondoanfoa nsdoifnoisdnfoinasodnf oaisdnfoinsoidnfo
          asdnoifnoisn doiafno ndosainfo iansdoinfoina oind oiandoi nfaoind
          foiasndoi fnasoidn fsd.
        </Text>
      </div>
    </div>
  );
};

export default Grider;
