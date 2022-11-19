(function (BLAZE) {
  BLAZE.MLhoCE = function () {
    document.title = "Gamezer";
    if (!eCaHCJ.IpbaAB()) {
      var LdpKbi = document.createElement("div");
      LdpKbi.className = "icon_unsupported_html5";
      document.body.appendChild(LdpKbi);
      return false;
    }
    BLAZE.NPlCCd.bgkiPD("system", "exit", gjFaLP);
    BLAZE.NPlCCd.bgkiPD("system", "start", eEgEeG);
    BLAZE.NPlCCd.bgkiPD("GameSystem", "LgDeGM", NPFonC);
    return true;
  };

  function gjFaLP() {
    if (BLAZE.bENkgn) {
      BLAZE.bENkgn.HeedgM();
    }
    if (BLAZE.CNfini) {
      BLAZE.CNfini.HeedgM();
    }
    if (BLAZE.pBPFBp) {
      BLAZE.pBPFBp.HeedgM();
    }
    if (arguments[2] == "unload") {
      return;
    }
    var nBlCGc;
    var LdpKbi = document.createElement("div");
    LdpKbi.id = "BLAZE_Exit";
    document.body.appendChild(LdpKbi);
    if (arguments[2] == "resource") {
      nBlCGc = gfKdjj("exit_resource").replace(
        "{URL}",
        "javascript:BLAZE.global.gs.re()"
      );
    } else if (arguments[2] == "version") {
      nBlCGc = gfKdjj("exit_version");
    } else if (arguments[2] == "unique") {
      nBlCGc = gfKdjj("exit_unique");
    } else {
      nBlCGc = gfKdjj("exit_error") + "<br>" + arguments[2];
    }
    LdpKbi.innerHTML = nBlCGc;
  }

  function NPFonC() {
    eCaHCJ.gNGEhc(true);
  }

  function eEgEeG() {
    if (BLAZE.GetENV("auth") == 1) {
      BLAZE.bENkgn.PpKPIa();
    } else {
      NPFonC();
    }
  }
  var eoDfFB = (function () {
    var lDkhIC = BLAZE.GetENV("PROJECT_CONTENT_URL");
    var hciMkg = {};
    hciMkg.billiards = {};
    hciMkg.billiards["gzpool"] = true;
    hciMkg.billiards["straight"] = true;
    hciMkg.billiards["8ball"] = true;
    hciMkg.billiards["9ball"] = true;
    hciMkg.billiards["snooker"] = true;
    hciMkg.billiards["snookerplus"] = true;
    hciMkg.billiards["pyramid"] = true;
    hciMkg.billiards["scrpyramid"] = true;
    hciMkg.billiards["carom"] = true;
    hciMkg.billiards["onepocket"] = true;
    hciMkg.billiards["anyeight"] = true;
    hciMkg.billiards["bank"] = true;
    hciMkg.billiards["combo"] = true;
    hciMkg.billiards["scoreball"] = true;
    hciMkg.chess = {
      gzchess: true,
    };
    hciMkg.checkers = {
      gzcheckers: true,
      amcheckers: true,
      anticheckers: true,
    };
    var lPdHHA = {};
    lPdHHA.nKLNog = function () {
      if (iklEgF) {
        return null;
      }
      iklEgF = true;
      return nkoaBn;
    };
    var iklEgF = false;
    var nkoaBn = {};
    nkoaBn.EEDEGL = function (npHLIm, JBALbg) {
      for (var MpAdGo in npHLIm) {
        if (hciMkg.hasOwnProperty(MpAdGo)) {
          var BPAjkL = npHLIm[MpAdGo].split(":");
          var ninAcH = BPAjkL.length;
          if (ninAcH == 5) {
            for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
              BPAjkL[nJikla] = oAhABg(BPAjkL[nJikla]);
            }
            JBALbg[MpAdGo] = BPAjkL;
          }
        }
      }
    };
    nkoaBn.cdggjM = function (LLNJgB, HeHOpd) {
      var BPAjkL = LLNJgB.split(":");
      var ninAcH = BPAjkL.length;
      if (ninAcH == 5) {
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          HeHOpd[nJikla] += oAhABg(BPAjkL[nJikla]);
          if (HeHOpd[nJikla] < 0) {
            HeHOpd[nJikla] = 0;
          }
        }
      }
    };
    nkoaBn.fJMGEP = function (npHLIm, dBcMeJ) {
      var CIAegn = dBcMeJ.stats_content.dBcMeJ;
      var mFjAJf = [0, 0, 0, 0, 0];
      var jCACbJ = false;
      for (var MpAdGo in hciMkg) {
        var Kbpfnh = "game_" + MpAdGo;
        if (npHLIm.hasOwnProperty(MpAdGo)) {
          var BanHbo = npHLIm[MpAdGo].split(":");
          if (BanHbo.length == 5) {
            for (var nJikla = 0; nJikla < 5; nJikla++) {
              BanHbo[nJikla] = oAhABg(BanHbo[nJikla]);
              mFjAJf[nJikla] += BanHbo[nJikla];
            }
            if (CIAegn[Kbpfnh] && BanHbo[2] > 0) {
              CIAegn[Kbpfnh].style.display = "";
              CIAegn[MpAdGo + "_score"].innerHTML = BanHbo[0];
              CIAegn[MpAdGo + "_played"].innerHTML = BanHbo[2];
              CIAegn[MpAdGo + "_won"].innerHTML = BanHbo[3];
              CIAegn[MpAdGo + "_refused"].innerHTML = BanHbo[4];
              jCACbJ = true;
              continue;
            }
          }
        }
        if (CIAegn[Kbpfnh]) {
          CIAegn[Kbpfnh].style.display = "none";
        }
      }
      if (jCACbJ) {
        CIAegn.no_stats.style.display = "none";
      } else {
        CIAegn.no_stats.style.display = "";
      }
      dBcMeJ.score.innerHTML = gfKdjj("user_overall_score").replace(
        "[n]",
        "<b>" + heeNHP.NgJdlP(mFjAJf[0] * 0.01) + "</b>"
      );
      dBcMeJ.ggvotes.innerHTML = gfKdjj("user_overall_ggvotes").replace(
        "[n]",
        "<b>" + mFjAJf[1] + "</b>"
      );
    };
    nkoaBn.jCoMhB = function (npHLIm, dBcMeJ) {
      var CIAegn = dBcMeJ.stats_content.dBcMeJ;
      var NgJdmG = false;
      var Llefkn = 0;
      var nJNobo = 0;
      for (var MpAdGo in hciMkg) {
        var aBBkjp = CIAegn["game_" + MpAdGo];
        if (npHLIm.hasOwnProperty(MpAdGo)) {
          var BPAjkL = npHLIm[MpAdGo];
          if (BPAjkL[2] > 0) {
            NgJdmG = true;
            Llefkn += BPAjkL[0];
            nJNobo += BPAjkL[1];
            aBBkjp.style.display = "";
            CIAegn[MpAdGo + "_score"].innerHTML = BPAjkL[0];
            CIAegn[MpAdGo + "_played"].innerHTML = BPAjkL[2];
            CIAegn[MpAdGo + "_won"].innerHTML = BPAjkL[3];
            CIAegn[MpAdGo + "_refused"].innerHTML = BPAjkL[4];
            continue;
          }
        }
        aBBkjp.style.display = "none";
      }
      if (!NgJdmG) {
        CIAegn.no_stats.style.display = "";
      } else {
        CIAegn.no_stats.style.display = "none";
      }
      dBcMeJ.score.innerHTML = gfKdjj("user_overall_score").replace(
        "[n]",
        "<b>" + heeNHP.NgJdlP(Llefkn * 0.01) + "</b>"
      );
      dBcMeJ.ggvotes.innerHTML = gfKdjj("user_overall_ggvotes").replace(
        "[n]",
        "<b>" + nJNobo + "</b>"
      );
    };
    nkoaBn.nJdHdm = function (MPOhLk) {
      if (!MPOhLk) {
        return;
      }
      var dBcMeJ = MPOhLk.dBcMeJ;
      for (var KhKnLH in hciMkg) {
        var JCebaH = dBcMeJ[KhKnLH + "_type"];
        var fkpane = "game_" + KhKnLH + "_";
        if (JCebaH) {
          var NGhcmm = hciMkg[KhKnLH];
          for (var laPgeD in NGhcmm) {
            var hCLFGe = document.createElement("option");
            hCLFGe.value = laPgeD;
            hCLFGe.innerHTML = gfKdjj(fkpane + laPgeD);
            JCebaH.appendChild(hCLFGe);
          }
        }
      }
    };
    nkoaBn.pmighc = function (PCFcMj) {
      if (!PCFcMj) {
        return;
      }
      var dBcMeJ = PCFcMj.dBcMeJ;
      for (var KhKnLH in hciMkg) {
        var JCebaH = dBcMeJ[KhKnLH + "_start_type"];
        var fkpane = "game_" + KhKnLH + "_";
        if (JCebaH) {
          var NGhcmm = hciMkg[KhKnLH];
          for (var laPgeD in NGhcmm) {
            var hCLFGe = document.createElement("option");
            hCLFGe.value = laPgeD;
            hCLFGe.innerHTML = gfKdjj(fkpane + laPgeD);
            JCebaH.appendChild(hCLFGe);
          }
        }
      }
    };
    nkoaBn.mjcCHF = function (JCebaH, cAdMFL) {
      cAdMFL = String(cAdMFL);
      if (JCebaH.LNKdIM === cAdMFL) {
        return;
      }
      JCebaH.LNKdIM = cAdMFL;
      eCaHCJ.GOebaM(JCebaH);
      var cbOAAi;
      if (cAdMFL != "") {
        if (!hciMkg.hasOwnProperty(cAdMFL)) {
          return;
        }
        cbOAAi = [cAdMFL];
      } else {
        cbOAAi = Object.keys(hciMkg);
      }
      var hCLFGe,
        eagjog,
        fkpane,
        NGhcmm,
        ninAcH = cbOAAi.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        var KhKnLH = cbOAAi[nJikla];
        eagjog = KhKnLH + ":";
        fkpane = "game_" + KhKnLH + "_";
        hCLFGe = document.createElement("option");
        hCLFGe.className = "game_title";
        hCLFGe.value = eagjog;
        hCLFGe.innerHTML = gfKdjj("game_" + KhKnLH);
        JCebaH.appendChild(hCLFGe);
        NGhcmm = hciMkg[KhKnLH];
        for (var laPgeD in NGhcmm) {
          hCLFGe = document.createElement("option");
          hCLFGe.value = eagjog + laPgeD;
          hCLFGe.innerHTML = gfKdjj(fkpane + laPgeD);
          JCebaH.appendChild(hCLFGe);
        }
      }
    };
    nkoaBn.eeIhal = function (LpkgOd, FcjjJm) {
      var FcjjJm = String(FcjjJm).split("$");
      var kiPjJb,
        GApkjE,
        nJikla,
        ninAcH = FcjjJm.length;
      if (ninAcH < 2) {
        return null;
      }
      var LdCLBM = {};
      LdCLBM.LpkgOd = String(LpkgOd);
      LdCLBM.OdiaHA = oAhABg(FcjjJm.shift());
      LdCLBM.NPlCCd = [];
      ninAcH--;
      for (nJikla = 0; nJikla < ninAcH; nJikla++) {
        GApkjE = FcjjJm[nJikla].split("^");
        if (GApkjE.length == 3) {
          LdCLBM.dAJJec = GApkjE.shift();
        }
        if (GApkjE.length != 2) {
          return null;
        }
        kiPjJb = {};
        if (GApkjE[0] != "") {
          kiPjJb.gv = GApkjE[0];
        }
        if (GApkjE[1] != "") {
          kiPjJb.gs = GApkjE[1];
        }
        LdCLBM.NPlCCd.push(kiPjJb);
      }
      if (LdCLBM.dAJJec === undefined) {
        return null;
      }
      return LdCLBM;
    };
    var nBfnep = "";
    var KdMoeb = null;
    var iFIdpD = [0, 0];
    var ebGKKM = [10, 10];
    var mjJpEa = [10, 10];
    var kLOgcG = {};
    var MGMAcA = {};
    nkoaBn.gldFLi = function (ifbchI) {
      if (nBfnep == "") {
        return null;
      }
      if (!kLOgcG) {
        return null;
      }
      if (KdMoeb) {
        var jEbmCE = KdMoeb.dBcMeJ.GSP_Preview;
        window.removeEventListener("resize", mgDAoM, false);
        jEbmCE.removeEventListener("mousemove", CNCKhi, false);
        jEbmCE.removeEventListener("touchstart", fEjNnb, false);
        jEbmCE.removeEventListener("touchmove", fEjNnb, false);
      }
      nBfnep = "";
      var mEFFom = null;
      for (var begijM in kLOgcG) {
        var glofaH = false;
        var DinPAd = kLOgcG[begijM].MoNbim;
        var CChdgB = kLOgcG[begijM].fOaCJN;
        for (var BNlnCD in DinPAd) {
          if (DinPAd[BNlnCD] != CChdgB[BNlnCD]) {
            glofaH = true;
            break;
          }
        }
        if (glofaH) {
          var jPHLgm = null;
          if (begijM == "billiards") {
            var knblMN = CChdgB.knblMN;
            if (knblMN < 100) {
              knblMN = 0;
            }
            jPHLgm = {
              c: knblMN,
              f: CChdgB.ecNAfm,
              t: CChdgB.hGENFN,
              b: CChdgB.EoPbeH,
              e: CChdgB.EEGlCp,
            };
          } else if (begijM == "chess") {
            jPHLgm = {
              b: CChdgB.LKPNPA,
              f: CChdgB.helBcd,
              e: CChdgB.EEGlCp,
            };
          } else if (begijM == "checkers") {
            jPHLgm = {
              b: CChdgB.LKPNPA,
              f: CChdgB.helBcd,
              e: CChdgB.EEGlCp,
            };
          } else {
            continue;
          }
          if (jPHLgm) {
            ifbchI.efEkBo.options[begijM] = jPHLgm;
            if (!mEFFom) {
              mEFFom = {};
            }
            mEFFom[begijM] = jPHLgm;
          }
        }
      }
      return mEFFom;
    };
    nkoaBn.mGhlmA = function (ifbchI, aebGFF, chojAn) {
      nBfnep = aebGFF;
      KdMoeb = chojAn;
      if (!kLOgcG[nBfnep]) {
        kLOgcG[nBfnep] = {
          GmpNoa: 0,
          MoNbim: {},
          fOaCJN: {},
          aGjdLb: {},
          dDdEoo: {},
        };
      }
      var dBcMeJ = KdMoeb.dBcMeJ;
      var DinPAd = kLOgcG[nBfnep].MoNbim;
      var CChdgB = kLOgcG[nBfnep].fOaCJN;
      if (ifbchI.efEkBo.statistics[nBfnep]) {
        kLOgcG[nBfnep].GmpNoa = oAhABg(ifbchI.efEkBo.statistics[nBfnep][0]);
      } else {
        kLOgcG[nBfnep].GmpNoa = 0;
      }
      var EnOkJH = ifbchI.Cddidl.w;
      var PgmFjE = BLAZE.pJhOGL;
      var EMflmL = Object.keys(EnOkJH);
      var kgeeih = EMflmL.length;
      var FODDol = kfbhmm(kLOgcG[nBfnep].GmpNoa);
      var fdfflH, AIIBfA, KlaNnm, GApkjE, nJikla, MDbhon, hCLFGe;
      var mCpNop,
        lkLpDh = ifbchI.efEkBo.options[nBfnep];
      var MmdOjp = BLAZE.CONTENT_VERSION;
      if (nBfnep == "billiards") {
        dBcMeJ.gst_billiards_table_select.onchange = GCgGbo;
        dBcMeJ.gst_billiards_bg_select.onchange = gnbGIa;
        dBcMeJ.gst_billiards_effect_select.onchange = LMJmDB;
        var jEbmCE = KdMoeb.dBcMeJ.GSP_Preview;
        window.addEventListener("resize", mgDAoM, false);
        jEbmCE.addEventListener("mousemove", CNCKhi, false);
        jEbmCE.addEventListener("touchstart", fEjNnb, false);
        jEbmCE.addEventListener("touchmove", fEjNnb, false);
        MDbhon = EMflmL.join(":") + FODDol;
        if (MGMAcA[nBfnep] !== MDbhon) {
          MGMAcA[nBfnep] = MDbhon;
          dBcMeJ.gst_billiards_cue_select.onchange = dAfkDN;
          eCaHCJ.GOebaM(dBcMeJ.gst_billiards_cue_select);
          hCLFGe = document.createElement("option");
          hCLFGe.value = 0;
          hCLFGe.innerHTML = gfKdjj("standard_item");
          dBcMeJ.gst_billiards_cue_select.appendChild(hCLFGe);
          dBcMeJ.gst_billiards_table_select.onchange = GCgGbo;
          eCaHCJ.GOebaM(dBcMeJ.gst_billiards_table_select);
          hCLFGe = document.createElement("option");
          hCLFGe.value = 0;
          hCLFGe.innerHTML = gfKdjj("standard_item");
          dBcMeJ.gst_billiards_table_select.appendChild(hCLFGe);
          dBcMeJ.gst_billiards_bg_select.onchange = gnbGIa;
          eCaHCJ.GOebaM(dBcMeJ.gst_billiards_bg_select);
          hCLFGe = document.createElement("option");
          hCLFGe.value = 0;
          hCLFGe.innerHTML = gfKdjj("no_background");
          dBcMeJ.gst_billiards_bg_select.appendChild(hCLFGe);
          dBcMeJ.gst_billiards_effect_select.onchange = LMJmDB;
          eCaHCJ.GOebaM(dBcMeJ.gst_billiards_effect_select);
          hCLFGe = document.createElement("option");
          hCLFGe.value = 0;
          hCLFGe.innerHTML = gfKdjj("no_effect");
          dBcMeJ.gst_billiards_effect_select.appendChild(hCLFGe);
          eCaHCJ.GOebaM(dBcMeJ.fabric_set);
          hCLFGe = document.createElement("div");
          hCLFGe.KKFnaA = 0;
          hCLFGe.className = "FabricSlot";
          hCLFGe.style.backgroundImage =
            'url("' +
            BLAZE.nHKIje.mbcAmA("bitmap", "billiards_default_fabric").src +
            '")';
          Ifhifh.KAMAEJ(hCLFGe, LGmbFn, [0], false);
          dBcMeJ.fabric_set.appendChild(hCLFGe);
          for (fdfflH = 0; fdfflH < kgeeih; fdfflH++) {
            GApkjE = EMflmL[fdfflH];
            if (!PgmFjE.hasOwnProperty(GApkjE)) {
              continue;
            }
            if (PgmFjE[GApkjE].length > 1) {
              if (PgmFjE[GApkjE][1] !== "gamezer") {
                continue;
              }
            }
            if (GApkjE.substr(0, 4) == "pcue") {
              GApkjE = oAhABg(GApkjE.substr(4));
              hCLFGe = document.createElement("option");
              hCLFGe.value = GApkjE + 100;
              hCLFGe.innerHTML = gfKdjj("inv_pcue" + GApkjE);
              dBcMeJ.gst_billiards_cue_select.appendChild(hCLFGe);
            } else if (GApkjE.substr(0, 4) == "acue") {
              GApkjE = oAhABg(GApkjE.substr(4));
              hCLFGe = document.createElement("option");
              hCLFGe.value = GApkjE + 1000;
              hCLFGe.innerHTML = gfKdjj("inv_acue" + GApkjE);
              dBcMeJ.gst_billiards_cue_select.appendChild(hCLFGe);
            } else if (GApkjE.substr(0, 3) == "ttb") {
              GApkjE = oAhABg(GApkjE.substr(3));
              hCLFGe = document.createElement("option");
              hCLFGe.value = GApkjE;
              hCLFGe.innerHTML = gfKdjj("inv_ttb" + GApkjE);
              dBcMeJ.gst_billiards_table_select.appendChild(hCLFGe);
            } else if (GApkjE.substr(0, 3) == "tbg") {
              GApkjE = oAhABg(GApkjE.substr(3));
              hCLFGe = document.createElement("option");
              hCLFGe.value = GApkjE;
              hCLFGe.innerHTML = gfKdjj("inv_tbg" + GApkjE);
              dBcMeJ.gst_billiards_bg_select.appendChild(hCLFGe);
            } else if (GApkjE.substr(0, 2) == "be") {
              GApkjE = oAhABg(GApkjE.substr(2));
              hCLFGe = document.createElement("option");
              hCLFGe.value = GApkjE;
              hCLFGe.innerHTML = gfKdjj("inv_be" + GApkjE);
              dBcMeJ.gst_billiards_effect_select.appendChild(hCLFGe);
            } else if (GApkjE.substr(0, 3) == "fbr") {
              GApkjE = oAhABg(GApkjE.substr(3));
              if (GApkjE == 0) {
                nJikla = 1;
              } else {
                nJikla = 0;
              }
              GApkjE = GApkjE * 100;
              for (AIIBfA = nJikla; AIIBfA < 5; AIIBfA++) {
                KlaNnm = GApkjE + AIIBfA;
                hCLFGe = document.createElement("div");
                hCLFGe.KKFnaA = KlaNnm;
                hCLFGe.className = "FabricSlot";
                hCLFGe.style.backgroundImage =
                  'url("' + lDkhIC + "fbr" + KlaNnm + ".png?" + MmdOjp + '")';
                Ifhifh.KAMAEJ(hCLFGe, LGmbFn, [KlaNnm], false);
                dBcMeJ.fabric_set.appendChild(hCLFGe);
              }
            }
          }
          hCLFGe = document.createElement("div");
          hCLFGe.className = "clear";
          dBcMeJ.fabric_set.appendChild(hCLFGe);
        }
        CChdgB.knblMN = FODDol;
        if (lkLpDh.c > 1000) {
          mCpNop = "acue" + (lkLpDh.c - 1000);
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            CChdgB.knblMN = lkLpDh.c;
          }
        } else if (lkLpDh.c > 100) {
          mCpNop = "pcue" + (lkLpDh.c - 100);
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            CChdgB.knblMN = lkLpDh.c;
          }
        }
        DinPAd.knblMN = CChdgB.knblMN;
        if (CChdgB.knblMN < 100) {
          dBcMeJ.gst_billiards_cue_select.value = 0;
        } else {
          dBcMeJ.gst_billiards_cue_select.value = CChdgB.knblMN;
        }
        CChdgB.EEGlCp = 0;
        CChdgB.hGENFN = 0;
        if (lkLpDh.t > 0) {
          mCpNop = "ttb" + lkLpDh.t;
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            CChdgB.hGENFN = lkLpDh.t;
          }
        }
        DinPAd.hGENFN = CChdgB.hGENFN;
        dBcMeJ.gst_billiards_table_select.value = CChdgB.hGENFN;
        CChdgB.ecNAfm = 0;
        if (lkLpDh.f > 0) {
          var MmKfOe = lkLpDh.f % 100;
          var gCmDMk = (lkLpDh.f - MmKfOe) * 0.01;
          mCpNop = "fbr" + gCmDMk;
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            if (MmKfOe > 4) {
              MmKfOe = 4;
            }
            CChdgB.ecNAfm = gCmDMk * 100 + MmKfOe;
          }
        }
        DinPAd.ecNAfm = CChdgB.ecNAfm;
        CChdgB.EoPbeH = 0;
        if (lkLpDh.b > 0) {
          mCpNop = "tbg" + lkLpDh.b;
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            CChdgB.EoPbeH = lkLpDh.b;
          }
        }
        DinPAd.EoPbeH = CChdgB.EoPbeH;
        dBcMeJ.gst_billiards_bg_select.value = CChdgB.EoPbeH;
        CChdgB.EEGlCp = 0;
        if (lkLpDh.e > 0) {
          mCpNop = "be" + lkLpDh.e;
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            CChdgB.EEGlCp = lkLpDh.e;
          }
        }
        DinPAd.EEGlCp = CChdgB.EEGlCp;
        dBcMeJ.gst_billiards_effect_select.value = CChdgB.EEGlCp;
        mgDAoM();
        LGmbFn(DinPAd.ecNAfm);
      } else if (nBfnep == "chess") {
        dBcMeJ.gst_chess_board_select.onchange = PjPNgP;
        eCaHCJ.GOebaM(dBcMeJ.gst_chess_board_select);
        hCLFGe = document.createElement("option");
        hCLFGe.value = 0;
        hCLFGe.innerHTML = gfKdjj("standard_item");
        dBcMeJ.gst_chess_board_select.appendChild(hCLFGe);
        for (fdfflH = 0; fdfflH < kgeeih; fdfflH++) {
          GApkjE = EMflmL[fdfflH];
          if (!PgmFjE.hasOwnProperty(GApkjE)) {
            continue;
          }
          if (PgmFjE[GApkjE].length > 1) {
            if (PgmFjE[GApkjE][1] !== "gamezer") {
              continue;
            }
          }
          if (GApkjE.substr(0, 3) == "chb") {
            GApkjE = oAhABg(GApkjE.substr(3));
            hCLFGe = document.createElement("option");
            hCLFGe.value = GApkjE;
            hCLFGe.innerHTML = gfKdjj("inv_chb" + GApkjE);
            dBcMeJ.gst_chess_board_select.appendChild(hCLFGe);
          } else if (GApkjE.substr(0, 3) == "csf") {
            GApkjE = oAhABg(GApkjE.substr(3));
            hCLFGe = document.createElement("option");
            hCLFGe.value = GApkjE;
            hCLFGe.innerHTML = gfKdjj("inv_csf" + GApkjE);
            dBcMeJ.gst_chess_pieceset_select.appendChild(hCLFGe);
          }
        }
        CChdgB.LKPNPA = 0;
        if (lkLpDh.b > 0) {
          mCpNop = "chb" + lkLpDh.b;
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            CChdgB.LKPNPA = lkLpDh.b;
          }
        }
        DinPAd.LKPNPA = CChdgB.LKPNPA;
        dBcMeJ.gst_chess_board_select.value = CChdgB.LKPNPA;
        CChdgB.EEGlCp = 0;
        HeGbJi();
      } else if (nBfnep == "checkers") {
        dBcMeJ.gst_checkers_board_select.onchange = GELepc;
        eCaHCJ.GOebaM(dBcMeJ.gst_checkers_board_select);
        hCLFGe = document.createElement("option");
        hCLFGe.value = 0;
        hCLFGe.innerHTML = gfKdjj("standard_item");
        dBcMeJ.gst_checkers_board_select.appendChild(hCLFGe);
        dBcMeJ.gst_checkers_pieceset_select.onchange = HCJMca;
        eCaHCJ.GOebaM(dBcMeJ.gst_checkers_pieceset_select);
        hCLFGe = document.createElement("option");
        hCLFGe.value = 0;
        hCLFGe.innerHTML = gfKdjj("standard_item");
        dBcMeJ.gst_checkers_pieceset_select.appendChild(hCLFGe);
        for (fdfflH = 0; fdfflH < kgeeih; fdfflH++) {
          GApkjE = EMflmL[fdfflH];
          if (!PgmFjE.hasOwnProperty(GApkjE)) {
            continue;
          }
          if (PgmFjE[GApkjE].length > 1) {
            if (PgmFjE[GApkjE][1] !== "gamezer") {
              continue;
            }
          }
          if (GApkjE.substr(0, 3) == "chb") {
            GApkjE = oAhABg(GApkjE.substr(3));
            hCLFGe = document.createElement("option");
            hCLFGe.value = GApkjE;
            hCLFGe.innerHTML = gfKdjj("inv_chb" + GApkjE);
            dBcMeJ.gst_checkers_board_select.appendChild(hCLFGe);
          } else if (GApkjE.substr(0, 3) == "ckf") {
            GApkjE = oAhABg(GApkjE.substr(3));
            hCLFGe = document.createElement("option");
            hCLFGe.value = GApkjE;
            hCLFGe.innerHTML = gfKdjj("inv_ckf" + GApkjE);
            dBcMeJ.gst_checkers_pieceset_select.appendChild(hCLFGe);
          }
        }
        CChdgB.LKPNPA = 0;
        if (lkLpDh.b > 0) {
          mCpNop = "chb" + lkLpDh.b;
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            CChdgB.LKPNPA = lkLpDh.b;
          }
        }
        DinPAd.LKPNPA = CChdgB.LKPNPA;
        dBcMeJ.gst_checkers_board_select.value = CChdgB.LKPNPA;
        CChdgB.helBcd = 0;
        if (lkLpDh.f > 0) {
          mCpNop = "ckf" + lkLpDh.f;
          if (EnOkJH.hasOwnProperty(mCpNop) && PgmFjE.hasOwnProperty(mCpNop)) {
            CChdgB.helBcd = lkLpDh.f;
          }
        }
        DinPAd.helBcd = CChdgB.helBcd;
        dBcMeJ.gst_checkers_pieceset_select.value = CChdgB.helBcd;
        CChdgB.EEGlCp = 0;
        HeGbJi();
      }
    };

    function HeGbJi() {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      var dBcMeJ = KdMoeb.dBcMeJ;
      var CChdgB = kLOgcG[nBfnep].fOaCJN;
      var eObIhM = kLOgcG[nBfnep].aGjdLb;
      var dlMGaK = kLOgcG[nBfnep].dDdEoo;
      var gPbjeM;
      if (nBfnep == "billiards") {
        if (CChdgB.knblMN !== eObIhM.knblMN) {
          gPbjeM = CChdgB.knblMN;
          eObIhM.knblMN = gPbjeM;
          if (gPbjeM < 100) {
            if (gPbjeM < 1) {
              dBcMeJ.GSP_Cue.style.backgroundImage =
                'url("' +
                BLAZE.nHKIje.mbcAmA("bitmap", "billiards_default_cue").src +
                '")';
            } else {
              KdMoeb.classList.add("loadgsc");
              dlMGaK.knblMN = true;
              gPbjeM = "cue" + gPbjeM;
              BLAZE.nHKIje.LepiMi(
                gPbjeM,
                lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
                1,
                EjofFE,
                "knblMN"
              );
            }
          } else if (gPbjeM < 1000) {
            gPbjeM -= 100;
            KdMoeb.classList.add("loadgsc");
            dlMGaK.knblMN = true;
            gPbjeM = "pcue" + gPbjeM;
            BLAZE.nHKIje.LepiMi(
              gPbjeM,
              lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
              1,
              EjofFE,
              "knblMN"
            );
          } else {
            gPbjeM -= 1000;
            KdMoeb.classList.add("loadgsc");
            dlMGaK.knblMN = true;
            gPbjeM = "apcue" + gPbjeM;
            BLAZE.nHKIje.LepiMi(
              gPbjeM,
              lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
              1,
              EjofFE,
              "knblMN"
            );
          }
        }
        if (CChdgB.hGENFN !== eObIhM.hGENFN) {
          gPbjeM = CChdgB.hGENFN;
          eObIhM.hGENFN = gPbjeM;
          if (gPbjeM == 0) {
            dBcMeJ.GSP_Table.style.backgroundImage =
              'url("' +
              BLAZE.nHKIje.mbcAmA("bitmap", "billiards_default_table").src +
              '")';
          } else {
            KdMoeb.classList.add("loadgsc");
            dlMGaK.hGENFN = true;
            gPbjeM = "ttb" + gPbjeM;
            BLAZE.nHKIje.LepiMi(
              gPbjeM,
              lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
              1,
              EjofFE,
              "hGENFN"
            );
          }
        }
        if (CChdgB.ecNAfm !== eObIhM.ecNAfm) {
          gPbjeM = CChdgB.ecNAfm;
          eObIhM.ecNAfm = gPbjeM;
          if (gPbjeM == 0) {
            dBcMeJ.GSP_Fabric.style.backgroundImage =
              'url("' +
              BLAZE.nHKIje.mbcAmA("bitmap", "billiards_default_fabric").src +
              '")';
          } else {
            KdMoeb.classList.add("loadgsc");
            dlMGaK.ecNAfm = true;
            gPbjeM = "fbr" + gPbjeM;
            BLAZE.nHKIje.LepiMi(
              gPbjeM,
              lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
              1,
              EjofFE,
              "ecNAfm"
            );
          }
        }
        if (CChdgB.EoPbeH !== eObIhM.EoPbeH) {
          eObIhM.EoPbeH = CChdgB.EoPbeH;
        }
      } else if (nBfnep == "chess") {
      } else if (nBfnep == "checkers") {
      }
    }

    function EjofFE(mgKkDL, OIBhDm, MPFgaL) {
      if (!OIBhDm) {
        return;
      }
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      var eObIhM = kLOgcG[nBfnep].aGjdLb;
      var dlMGaK = kLOgcG[nBfnep].dDdEoo;
      var dBcMeJ = KdMoeb.dBcMeJ;
      if (MPFgaL == "knblMN") {
        if (eObIhM.knblMN != 0) {
          dlMGaK[MPFgaL] = false;
          dBcMeJ.GSP_Cue.style.backgroundImage = 'url("' + OIBhDm.src + '")';
        }
      } else if (MPFgaL == "hGENFN") {
        if (eObIhM.hGENFN != 0) {
          dlMGaK[MPFgaL] = false;
          dBcMeJ.GSP_Table.style.backgroundImage = 'url("' + OIBhDm.src + '")';
        }
      } else if (MPFgaL == "ecNAfm") {
        if (eObIhM.ecNAfm != 0) {
          dlMGaK[MPFgaL] = false;
          dBcMeJ.GSP_Fabric.style.backgroundImage = 'url("' + OIBhDm.src + '")';
        }
      } else {
        $warn(61190395);
        return;
      }
      for (var BNlnCD in dlMGaK) {
        if (dlMGaK[BNlnCD]) {
          return;
        }
      }
      KdMoeb.classList.remove("loadgsc");
    }

    function eFgIlG(LcJNFC) {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      var dBcMeJ = KdMoeb.dBcMeJ;
      gAmDeK.AFMEOb(LcJNFC, iFIdpD);
      var jEbmCE = KdMoeb.dBcMeJ.GSP_CueContanier;
      var pGmpKl = LcJNFC[0] / ebGKKM[0];
      if (pGmpKl < 0) {
        pGmpKl = 0;
      } else if (pGmpKl > 1) {
        pGmpKl = 1;
      }
      dBcMeJ.GSP_CueContanier.style.left =
        390 + heeNHP.CoanLA(-pGmpKl * (70 + mjJpEa[1] - ebGKKM[0])) + "px";
    }

    function CNCKhi(kOcBHb) {
      eFgIlG([kOcBHb.clientX, kOcBHb.clientY]);
    }

    function fEjNnb(kOcBHb) {
      if (kOcBHb.changedTouches.length < 1) {
        return;
      }
      var mbCOgG = kOcBHb.changedTouches[0];
      eFgIlG([mbCOgG.clientX, mbCOgG.clientY]);
    }

    function mgDAoM(kOcBHb) {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      var dBcMeJ = KdMoeb.dBcMeJ;
      iFIdpD = eCaHCJ.fMcHfj(dBcMeJ.GSP_Preview);
      iFIdpD[0] -= dBcMeJ.switcher.offsetWidth * 0.25;
      ebGKKM[0] = dBcMeJ.GSP_Preview.offsetWidth;
      ebGKKM[1] = dBcMeJ.GSP_Preview.offsetHeight;
      mjJpEa[0] = dBcMeJ.GSP_CueContanier.offsetWidth;
      mjJpEa[1] = dBcMeJ.GSP_CueContanier.offsetHeight;
      eFgIlG([0, 0]);
    }

    function dAfkDN() {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!KdMoeb.parentNode) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      kLOgcG[nBfnep].fOaCJN.knblMN = oAhABg(
        KdMoeb.dBcMeJ.gst_billiards_cue_select.value
      );
      HeGbJi();
    }

    function GCgGbo() {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!KdMoeb.parentNode) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      kLOgcG[nBfnep].fOaCJN.hGENFN = oAhABg(
        KdMoeb.dBcMeJ.gst_billiards_table_select.value
      );
      HeGbJi();
    }

    function HCJMca() {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!KdMoeb.parentNode) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      kLOgcG[nBfnep].fOaCJN.helBcd = oAhABg(
        KdMoeb.dBcMeJ.gst_checkers_pieceset_select.value
      );
      HeGbJi();
    }

    function PjPNgP() {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!KdMoeb.parentNode) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      kLOgcG[nBfnep].fOaCJN.LKPNPA = oAhABg(
        KdMoeb.dBcMeJ.gst_chess_board_select.value
      );
      HeGbJi();
    }

    function GELepc() {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!KdMoeb.parentNode) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      kLOgcG[nBfnep].fOaCJN.LKPNPA = oAhABg(
        KdMoeb.dBcMeJ.gst_checkers_board_select.value
      );
      HeGbJi();
    }

    function LGmbFn(GApkjE) {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!KdMoeb.parentNode) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      var dBcMeJ = KdMoeb.dBcMeJ;
      GApkjE = oAhABg(GApkjE);
      var NGhcmm = dBcMeJ.fabric_set.children;
      var ninAcH = NGhcmm.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        var kiPjJb = NGhcmm[nJikla];
        if (kiPjJb.KKFnaA === GApkjE) {
          kiPjJb.classList.add("selected");
        } else {
          kiPjJb.classList.remove("selected");
        }
      }
      kLOgcG[nBfnep].fOaCJN.ecNAfm = GApkjE;
      HeGbJi();
    }

    function gnbGIa() {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!KdMoeb.parentNode) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      kLOgcG[nBfnep].fOaCJN.EoPbeH = oAhABg(
        KdMoeb.dBcMeJ.gst_billiards_bg_select.value
      );
      HeGbJi();
    }

    function LMJmDB() {
      if (nBfnep == "") {
        return;
      }
      if (!KdMoeb) {
        return;
      }
      if (!KdMoeb.parentNode) {
        return;
      }
      if (!kLOgcG[nBfnep]) {
        return;
      }
      kLOgcG[nBfnep].fOaCJN.EEGlCp = oAhABg(
        KdMoeb.dBcMeJ.gst_billiards_effect_select.value
      );
      HeGbJi();
    }

    function kfbhmm(GmpNoa) {
      GmpNoa = oAhABg(GmpNoa) * 0.01;
      var NPjFOB = 0;
      if (GmpNoa < 5) {
        NPjFOB = 0;
      } else if (GmpNoa < 10) {
        NPjFOB = 1;
      } else if (GmpNoa < 25) {
        NPjFOB = 2;
      } else if (GmpNoa < 50) {
        NPjFOB = 3;
      } else if (GmpNoa < 100) {
        NPjFOB = 4;
      } else if (GmpNoa < 200) {
        NPjFOB = 5;
      } else if (GmpNoa < 300) {
        NPjFOB = 6;
      } else if (GmpNoa < 400) {
        NPjFOB = 7;
      } else if (GmpNoa < 500) {
        NPjFOB = 8;
      } else if (GmpNoa < 1000) {
        NPjFOB = 9;
      } else if (GmpNoa < 2000) {
        NPjFOB = 10;
      } else if (GmpNoa < 3000) {
        NPjFOB = 11;
      } else if (GmpNoa < 4000) {
        NPjFOB = 12;
      } else if (GmpNoa < 5000) {
        NPjFOB = 13;
      } else if (GmpNoa < 6000) {
        NPjFOB = 14;
      } else if (GmpNoa < 7000) {
        NPjFOB = 15;
      } else if (GmpNoa < 8000) {
        NPjFOB = 16;
      } else if (GmpNoa < 9000) {
        NPjFOB = 17;
      } else if (GmpNoa < 10000) {
        NPjFOB = 18;
      } else {
        NPjFOB = 19;
      }
      return NPjFOB;
    }
    return lPdHHA;
  })();
  BLAZE.eoDfFB = eoDfFB;
  var ipiMeH = 0;
  var oIBKHg = (function () {
    var lDkhIC = BLAZE.GetENV("PROJECT_CONTENT_URL");
    var cmbjGA = [1400, 1000];
    var cIgPbl = [6, 3];
    var pGmKbj = -28;
    var PanInM = 116;
    var GdBLBh = 36;
    var JDJJKH = [94, 94];
    var ApolOp = 12;
    var BKNiJh = 0.15;
    var iocbhP = 0.3;
    var fNGPHB = 120;
    var JkDLhk = Math.round(Math.random() * 1000000);
    var lcILbb = BLAZE.nHKIje.KbebaO(JkDLhk);
    var lPdHHA = function (nAJgdM) {
      var jnJBBo = nAJgdM;
      nAJgdM.lPdHHA = this;
      this.dDDJLB = 0;
      this.EAflFm = false;
      this.bDJojN = false;
      this.HJLhEI = function (CbINMc) {
        if (CbINMc != lcILbb) {
          window.location.href = "/";
        }
        return JkDLhk;
      };
      this.fFMGmD = function (kEmakh, nHhEnP, mHDNEJ) {
        return jnJBBo.fFMGmD(kEmakh, nHhEnP, mHDNEJ);
      };
      this.GIfDAK = function () {
        jnJBBo.GIfDAK();
      };
      this.efoilB = function (FcjjJm) {
        jnJBBo.efoilB(FcjjJm);
      };
      this.lBgbNP = function () {
        jnJBBo.lBgbNP();
      };
      this.FKFMmF = function () {
        jnJBBo.FKFMmF();
      };
      this.HeedgM = function () {
        jnJBBo.HeedgM();
      };
      this.hcLEeN = function (JcLoBg) {
        jnJBBo.hcLEeN(JcLoBg);
      };
      this.iPJlAG = function (iOKbkM) {
        jnJBBo.iPJlAG(iOKbkM);
      };
      this.lKNOFa = function (fIjFDB) {
        jnJBBo.lKNOFa(fIjFDB);
      };
      this.eEelho = function (CIkflk) {
        jnJBBo.eEelho(CIkflk);
      };
    };
    var kJfBld = function (pKiKCF) {
      this.PpKPIa(pKiKCF);
    };
    kJfBld.prototype.PpKPIa = function (pKiKCF) {
      if (pKiKCF.length < 2) {
        $error(20819591);
        return;
      }
      if (this.ijmngN) {
        $error(20819592);
        return;
      }
      if (!FlhgdA(pKiKCF[0])) {
        $error(20819593);
        return;
      }
      if (pKiKCF[1]) {
        ipiMeH = 1;
      } else {
        ipiMeH = 0;
      }
      this.lPdHHA = null;
      this.FMdgGo = BLAZE.nHKIje.OCAilP();
      this.ohiNnb = false;
      this.ciNgdE();
      this.ijmngN = pKiKCF[0];
      this.HGpCdd = null;
      this.ocBnBA = null;
      this.ImkhAe = null;
      this.eHDpeC = null;
      this.PdMbho = new BLAZE.CbIDAm(
        "ChessRenderer",
        cmbjGA[1],
        cmbjGA[1],
        1,
        ipiMeH
      );
      this.PdMbho.ILMNDn = true;
      this.PdMbho.jkaFOn = false;
      this.PdMbho.jfgmcH = false;
      this.PdMbho.EEfbOm.GmKkeP = true;
      this.EIefAg = BLAZE.nHKIje.mbcAmA("element", "game.chess_table");
      if (!this.EIefAg) {
        $error(63950928);
        return;
      }
      eCaHCJ.hdhbKA(this.EIefAg);
      this.EIefAg.oBAgKJ = true;
      var NFNlob = this.EIefAg.dBcMeJ;
      var BEoghm = NFNlob.table_sectors;
      var nJikla = 0;
      for (var fmFfFk = 0; fmFfFk < 8; fmFfFk++) {
        var iFKeAc = document.createElement("div");
        iFKeAc.className = "ChessTableRow";
        iFKeAc.liadmE = this;
        BEoghm.appendChild(iFKeAc);
        for (var Djljdg = 0; Djljdg < 8; Djljdg++) {
          var kiPjJb = BLAZE.nHKIje.HjLjHi("game.chess_sector", false);
          kiPjJb.jDnaip = nJikla;
          iFKeAc.appendChild(kiPjJb);
          NFNlob["s_" + nJikla] = kiPjJb;
          NFNlob["a_" + nJikla] = kiPjJb;
          nJikla++;
        }
      }
      BEoghm.addEventListener("touchend", this.bpFcAb, true);
      BEoghm.addEventListener("touchstart", this.bpFcAb, true);
      BEoghm.addEventListener("mouseup", this.bpFcAb, true);
      BEoghm.addEventListener("mousedown", this.bpFcAb, true);
      this.MOELIO = BLAZE.nHKIje.mbcAmA("element", "game.chess_select");
      this.JCacHo = BLAZE.nHKIje.mbcAmA("element", "game.chess_flash");
      var mMnbaJ = this;
    };
    kJfBld.prototype.fFMGmD = function (kEmakh, nHhEnP, mHDNEJ) {
      if (!this.ijmngN) {
        $warn(2290681);
        return false;
      }
      if (this.ohiNnb) {
        $warn(2290682);
        return false;
      }
      if (!kEmakh) {
        $warn(2290683);
        return false;
      }
      if (!nHhEnP) {
        $warn(2290684);
        return false;
      }
      var pPokEL = 0;
      if (mHDNEJ) {
        pPokEL = 1;
      }
      if (ipiMeH != pPokEL) {
        ipiMeH = pPokEL;
        this.PdMbho.OomKnE();
        this.PdMbho.dEbMEc();
        this.PdMbho = new BLAZE.CbIDAm(
          "ChessRenderer",
          cmbjGA[1],
          cmbjGA[1],
          1,
          ipiMeH
        );
        this.PdMbho.ILMNDn = true;
        this.PdMbho.jkaFOn = false;
        this.PdMbho.jfgmcH = false;
        this.PdMbho.EEfbOm.GmKkeP = true;
      }
      this.lPdHHA.dDDJLB = 0;
      this.ciNgdE();
      if (nHhEnP.length != 11) {
        $warn(64223638);
        return false;
      }
      nHhEnP[2] = oAhABg(nHhEnP[2]);
      nHhEnP[3] = oAhABg(nHhEnP[3]);
      nHhEnP[4] = oAhABg(nHhEnP[4]);
      nHhEnP[5] = oAhABg(nHhEnP[5]);
      nHhEnP[6] = oAhABg(nHhEnP[6]);
      nHhEnP[7] = oAhABg(nHhEnP[7]);
      this.fHCfBo = nHhEnP;
      this.JfanJB = nHhEnP[5] == 1;
      this.HGpCdd = kEmakh;
      var dBcMeJ = this.HGpCdd.dBcMeJ;
      this.dbfCbJ = kEmakh.parentNode;
      if (!this.dbfCbJ) {
        $error(95882103);
        return;
      }
      this.ChiCPF = eCaHCJ.fMcHfj(this.dbfCbJ);
      this.ocBnBA = dBcMeJ.GameScoreboard;
      this.ImkhAe = dBcMeJ.GameArea;
      this.McFFpC = dBcMeJ.GameFullZone;
      this.eHDpeC = dBcMeJ.GameTable;
      this.eHDpeC.appendChild(this.EIefAg);
      this.PdMbho.pHloPi(this.eHDpeC);
      this.ijmngN.IPAlBM(cmbjGA, false);
      this.oCJPLH(nHhEnP[7], nHhEnP[8]);
      this.ohiNnb = true;
      return true;
    };
    kJfBld.prototype.GIfDAK = function () {
      if (!this.ijmngN) {
        $warn(59029918);
        return;
      }
      this.Fmfanl(1, "");
      this.Fmfanl(2, "");
      this.oHICAN([]);
      this.gaKJIa();
      this.ciNgdE();
      this.ohiNnb = false;
      if (this.MOELIO) {
        if (this.MOELIO.parentNode) {
          this.MOELIO.parentNode.removeChild(this.MOELIO);
        }
      }
      if (this.JCacHo) {
        if (this.JCacHo.parentNode) {
          this.JCacHo.parentNode.removeChild(this.JCacHo);
        }
      }
      if (this.EIefAg) {
        if (this.EIefAg.parentNode) {
          this.EIefAg.parentNode.removeChild(this.EIefAg);
        }
      }
      if (this.PdMbho) {
        this.PdMbho.dEbMEc();
        this.PdMbho.ccPIHB();
      }
      this.HGpCdd = null;
      this.ocBnBA = null;
      this.ImkhAe = null;
      this.eHDpeC = null;
    };
    kJfBld.prototype.HeedgM = function () {
      this.GIfDAK();
      this.ijmngN = null;
      this.MOELIO = null;
      this.JCacHo = null;
      this.EIefAg = null;
      this.PdMbho = null;
    };
    kJfBld.prototype.ciNgdE = function () {
      this.bcapMH = {};
      this.bcapMH._6 = [
        [[-1, 0]],
        [[1, 0]],
        [[0, -1]],
        [[0, 1]],
        [[-1, -1]],
        [[1, 1]],
        [[1, -1]],
        [[-1, 1]],
      ];
      this.bcapMH._5 = [
        [
          [-1, 0],
          [-2, 0],
          [-3, 0],
          [-4, 0],
          [-5, 0],
          [-6, 0],
          [-7, 0],
        ],
        [
          [0, -1],
          [0, -2],
          [0, -3],
          [0, -4],
          [0, -5],
          [0, -6],
          [0, -7],
        ],
        [
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
          [7, 0],
        ],
        [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
          [0, 5],
          [0, 6],
          [0, 7],
        ],
        [
          [-1, -1],
          [-2, -2],
          [-3, -3],
          [-4, -4],
          [-5, -5],
          [-6, -6],
          [-7, -7],
        ],
        [
          [1, -1],
          [2, -2],
          [3, -3],
          [4, -4],
          [5, -5],
          [6, -6],
          [7, -7],
        ],
        [
          [-1, 1],
          [-2, 2],
          [-3, 3],
          [-4, 4],
          [-5, 5],
          [-6, 6],
          [-7, 7],
        ],
        [
          [1, 1],
          [2, 2],
          [3, 3],
          [4, 4],
          [5, 5],
          [6, 6],
          [7, 7],
        ],
      ];
      this.bcapMH._4 = [
        [
          [-1, -1],
          [-2, -2],
          [-3, -3],
          [-4, -4],
          [-5, -5],
          [-6, -6],
          [-7, -7],
        ],
        [
          [1, -1],
          [2, -2],
          [3, -3],
          [4, -4],
          [5, -5],
          [6, -6],
          [7, -7],
        ],
        [
          [-1, 1],
          [-2, 2],
          [-3, 3],
          [-4, 4],
          [-5, 5],
          [-6, 6],
          [-7, 7],
        ],
        [
          [1, 1],
          [2, 2],
          [3, 3],
          [4, 4],
          [5, 5],
          [6, 6],
          [7, 7],
        ],
      ];
      this.bcapMH._3 = [
        [[-2, 1]],
        [[-2, -1]],
        [[2, -1]],
        [[2, 1]],
        [[-1, -2]],
        [[1, -2]],
        [[-1, 2]],
        [[1, 2]],
      ];
      this.bcapMH._2 = [
        [
          [-1, 0],
          [-2, 0],
          [-3, 0],
          [-4, 0],
          [-5, 0],
          [-6, 0],
          [-7, 0],
        ],
        [
          [0, -1],
          [0, -2],
          [0, -3],
          [0, -4],
          [0, -5],
          [0, -6],
          [0, -7],
        ],
        [
          [1, 0],
          [2, 0],
          [3, 0],
          [4, 0],
          [5, 0],
          [6, 0],
          [7, 0],
        ],
        [
          [0, 1],
          [0, 2],
          [0, 3],
          [0, 4],
          [0, 5],
          [0, 6],
          [0, 7],
        ],
      ];
      this.bcapMH._1W = [[[1, 0]]];
      this.bcapMH._1WF = [
        [
          [1, 0],
          [2, 0],
        ],
      ];
      this.bcapMH._1WC = [[[1, -1]], [[1, 1]]];
      this.bcapMH._1B = [[[-1, 0]]];
      this.bcapMH._1BF = [
        [
          [-1, 0],
          [-2, 0],
        ],
      ];
      this.bcapMH._1BC = [[[-1, -1]], [[-1, 1]]];
      this.lIKDEP = null;
      this.jNHelL = false;
      this.IaHPie = 0;
      this.fBlAOP = "";
      this.fHCfBo = null;
      this.JfanJB = false;
      this.eKgBEN = {
        _1: [],
        _2: [],
      };
      this.DglBmN = [];
      this.NcJIdp = [];
      this.ELANMN = 1.0;
      this.bcDNDI = null;
      this.nCIeej = false;
      this.oHNLbe = 0;
      this.GjiMbE = 0;
      this.Ohijha = false;
      this.EGCclp = 0;
      this.KImhEM = 0;
      this.nMMmiP = null;
      this.AmMkPL = [];
      this.JBckim = [];
      this.bNnnnp = [];
      this.LNlOgo = -1;
      this.ibcgIe = "";
      this.jBgBcl = "";
      this.elpkdd = null;
      this.llPbji = null;
      this.ODEdfI = {};
      this.MFKnAF = {};
      this.CaPjfF = null;
      this.LMgghH = {};
      this.elJmMm = "";
      this.daNEef = null;
      this.jJPDNf = false;
      this.hOciMp = 0;
      this.IeMJGm = -1;
      this.NIkDbl = [];
      this.eHENDa = null;
      this.cgeiLp = "";
      this.CoajNh = -1;
      this.LljCGc = null;
      this.iPkgOG = null;
      this.HanOMI = 0;
      this.gNEdBe = 0;
      this.cpcCEI = 0;
      this.aLOcBM = 0;
      this.bEHIHi = null;
      this.ABNNLb = 0;
      this.HHiGNa = false;
    };
    kJfBld.prototype.iPJlAG = function (iOKbkM) {
      if (!this.ohiNnb) {
        return;
      }
      if (this.EIefAg) {
        var KlaNnm = this.EIefAg.dBcMeJ;
        var EEfbOm = KlaNnm.AOgmcK;
        if (!EEfbOm) {
          EEfbOm = KlaNnm.table_super_game;
          if (EEfbOm.parentNode) {
            EEfbOm.parentNode.removeChild(EEfbOm);
          }
          this.eHDpeC.appendChild(EEfbOm);
          KlaNnm.AOgmcK = EEfbOm;
        }
        var KlaNnm = this.EIefAg.dBcMeJ;
        KlaNnm.table_super_game_zp.innerHTML = iOKbkM + " ZP";
        EEfbOm.classList.add("AnimSuperGame");
      }
    };
    kJfBld.prototype.eEelho = function (PjGdcn) {
      if (!this.ohiNnb) {
        return;
      }
      var lkgcaO, GApkjE, CIkflk;
      this.ChiCPF = eCaHCJ.fMcHfj(this.dbfCbJ);
      this.DMMJhj = eCaHCJ.fMcHfj(this.PFOljF);
      PjGdcn[0] -= PjGdcn[0] % 8;
      PjGdcn[1] -= PjGdcn[1] % 8;
      var GmnjNl = PjGdcn[0] + "px";
      var ecLNjB = PjGdcn[1] + "px";
      var hHeOpp = "";
      var JdGffO = "";
      var lOBLpe = "";
      var ACDKLN = PjGdcn[0] >= PjGdcn[1];
      if (ACDKLN) {
        hHeOpp = PjGdcn[1] + "px";
        JdGffO = "0px";
        lOBLpe = Math.round((PjGdcn[0] - PjGdcn[1]) * 0.5) + "px";
        this.ELANMN = PjGdcn[0] / cmbjGA[0];
      } else {
        hHeOpp = PjGdcn[0] + "px";
        JdGffO = Math.round((PjGdcn[1] - PjGdcn[0]) * 0.5) + "px";
        lOBLpe = "0px";
        this.ELANMN = PjGdcn[1] / cmbjGA[0];
      }
      var s, l;
      if (this.EIefAg) {
        s = this.EIefAg.style;
        s.width = s.height = hHeOpp;
        s.top = JdGffO;
        s.left = lOBLpe;
        var NFNlob = this.EIefAg.dBcMeJ;
        NFNlob.table_sectors.style.padding =
          Math.round(GdBLBh * this.ELANMN) + "px";
        var OiKKpb = 0.85;
        var PBKIGO = this.ELANMN * OiKKpb;
        var jmanpC = Math.round((cmbjGA[0] - cmbjGA[1]) * 0.5);
        var MnEPFP, fBleGp, MKIhHo;
        if (ACDKLN) {
          MnEPFP = Math.round(jmanpC / OiKKpb) + "px";
          fBleGp = Math.round(cmbjGA[1] / OiKKpb) + "px";
        } else {
          MnEPFP = Math.round(cmbjGA[1] / OiKKpb) + "px";
          fBleGp = Math.round(jmanpC / OiKKpb) + "px";
        }
        l = NFNlob.stack_2.classList;
        s = NFNlob.stack_2.style;
        s.width = MnEPFP;
        s.height = fBleGp;
        if (ACDKLN) {
          l.remove("StackPortrait");
          l.add("StackLandscape");
          s.top = "0px";
          s.left = "-" + MnEPFP;
          eCaHCJ.cdiJPK(NFNlob.stack_2, PBKIGO, PBKIGO);
        } else {
          l.add("StackPortrait");
          l.remove("StackLandscape");
          s.top = "0px";
          s.left = "0px";
          eCaHCJ.cdiJPK(NFNlob.stack_2, PBKIGO, -PBKIGO);
        }
        l = NFNlob.stack_1.classList;
        s = NFNlob.stack_1.style;
        s.width = MnEPFP;
        s.height = fBleGp;
        if (ACDKLN) {
          l.remove("StackPortrait");
          l.add("StackLandscape");
          s.top = "0px";
          s.bottom = "";
          s.left = "";
          s.right = "-" + MnEPFP;
        } else {
          l.add("StackPortrait");
          l.remove("StackLandscape");
          s.top = "";
          s.bottom = "-" + fBleGp;
          s.left = "0px";
          s.right = "";
        }
        eCaHCJ.cdiJPK(NFNlob.stack_1, PBKIGO, PBKIGO);
      }
      if (this.PdMbho) {
        s = this.PdMbho.EEfbOm.style;
        s.width = s.height = hHeOpp;
        s.top = JdGffO;
        s.left = lOBLpe;
      }
      this.hkLImp();
    };
    kJfBld.prototype.efoilB = function (FcjjJm) {
      if (!FcjjJm) {
        return;
      }
      this.jNHelL = false;
      this.lIKDEP = FcjjJm;
      this.lIKDEP.dHNdGJ = 0;
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      this.bcDNDI = window.setTimeout(this.OLhApP, 50, this);
    };
    kJfBld.prototype.lBgbNP = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      this.ijmngN.aCCjfA();
      this.jNHelL = false;
      this.lIKDEP.dHNdGJ = 0;
      this.bcDNDI = window.setTimeout(this.OLhApP, 50, this);
    };
    kJfBld.prototype.ecPihA = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.lIKDEP.dHNdGJ >= this.lIKDEP.NPlCCd.length - 1) {
        return;
      }
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      this.jNHelL = true;
      this.ijmngN.OjmHEh();
      this.ijmngN.KNilPi();
      this.ijmngN.pHlLKH();
    };
    kJfBld.prototype.FKFMmF = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      this.jNHelL = false;
      this.ijmngN.AoPlEI();
      this.CnbiBg();
    };
    kJfBld.prototype.CnbiBg = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.jJPDNf || this.jNHelL) {
        return;
      }
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      var CchIIl = 1500;
      if (this.lIKDEP.dHNdGJ < 1) {
        CchIIl = 50;
      }
      this.bcDNDI = window.setTimeout(this.hhHnAe, CchIIl, this);
    };
    kJfBld.prototype.OLhApP = function (CdBicM) {
      if (!CdBicM.lIKDEP || !CdBicM.ohiNnb) {
        return;
      }
      CdBicM.EGKkOn();
    };
    kJfBld.prototype.hhHnAe = function (CdBicM) {
      if (!CdBicM.lIKDEP || !CdBicM.ohiNnb) {
        return;
      }
      if (this.jJPDNf || this.jNHelL) {
        return;
      }
      var dHNdGJ = CdBicM.lIKDEP.dHNdGJ;
      var NPlCCd = CdBicM.lIKDEP.NPlCCd;
      if (dHNdGJ < NPlCCd.length) {
        var kiPjJb = NPlCCd[dHNdGJ];
        dHNdGJ = dHNdGJ + 1;
        CdBicM.lIKDEP.dHNdGJ = dHNdGJ;
        CdBicM.hcLEeN(kiPjJb);
      } else {
        CdBicM.ijmngN.AoPlEI();
      }
    };
    kJfBld.prototype.EGKkOn = function () {
      if (!this.ohiNnb) {
        return;
      }
      var GApkjE, lkgcaO, nJikla, ninAcH, BanHbo, FcjjJm, Kllakj;
      var bNpjMK = false;
      if (this.DglBmN.length > 0) {
        FcjjJm = this.DglBmN.shift();
        Kllakj = FcjjJm[0];
        if (Kllakj == "i") {
          this.fBlAOP = FcjjJm[1];
          this.ijmngN.KpnddA();
          this.oHICAN([]);
          this.gaKJIa();
          this.jJPDNf = false;
          this.NIkDbl = [];
          bNpjMK = true;
          this.gOkeLA();
        } else if (Kllakj == "s") {
          GApkjE = FcjjJm[1].split(",");
          if (GApkjE.length == 2) {
            lkgcaO = oAhABg(GApkjE[0]);
            this.elpkdd = BLAZE.nHKIje.mbcAmA(
              "bitmap",
              "chess_figures_" + lkgcaO
            );
            if (lkgcaO == 0) {
              this.ibcgIe = "chks_0_";
            } else {
              this.ibcgIe = "chss_" + lkgcaO + "_";
            }
            lkgcaO = oAhABg(GApkjE[1]);
            this.llPbji = BLAZE.nHKIje.mbcAmA(
              "bitmap",
              "chess_figures_" + lkgcaO
            );
            if (lkgcaO == 0) {
              this.jBgBcl = "chks_0_";
            } else {
              this.jBgBcl = "chss_" + lkgcaO + "_";
            }
          }
          if (this.jJPDNf) {
            this.elJmMm = FcjjJm[2];
          } else {
            this.ADnFKL(FcjjJm[2]);
          }
        } else if (Kllakj == "a") {
          this.GjiMbE = oAhABg(FcjjJm[2]);
          this.oHNLbe = oAhABg(FcjjJm[1]);
          this.Ohijha = false;
          this.EGCclp = 0;
          this.KImhEM = 0;
          this.oHICAN([]);
          this.gaKJIa();
          this.CaPjfF = null;
          this.LMgghH = {};
          this.ijmngN.pfobLM();
          this.JBckim = [];
          if (FcjjJm[3] != "") {
            BanHbo = FcjjJm[3].split(",");
            ninAcH = BanHbo.length;
            for (nJikla = 0; nJikla < ninAcH; nJikla++) {
              lkgcaO = BanHbo[nJikla].split("_");
              if (lkgcaO.length == 3) {
                this.JBckim.push([
                  oAhABg(lkgcaO[0]),
                  oAhABg(lkgcaO[1]),
                  oAhABg(lkgcaO[2]),
                ]);
              }
            }
          }
          this.bNnnnp = [];
          if (FcjjJm[4] != "") {
            BanHbo = FcjjJm[4].split(",");
            ninAcH = BanHbo.length;
            for (nJikla = 0; nJikla < ninAcH; nJikla++) {
              this.bNnnnp["_" + BanHbo[nJikla]] = true;
            }
          }
        } else if (Kllakj == "r") {
          this.Ohijha = false;
          this.oHNLbe = 0;
          this.EGCclp = 0;
          this.KImhEM = 0;
          this.oHICAN([]);
          this.gaKJIa();
          this.CaPjfF = null;
          this.LMgghH = {};
          this.ijmngN.KafPBn();
        } else if (Kllakj == "p") {
          var idfjHK = oAhABg(FcjjJm[1]);
          if (
            (this.lPdHHA.dDDJLB != idfjHK && idfjHK > 0) ||
            !this.lPdHHA.EAflFm
          ) {
            this.GjiMbE = oAhABg(FcjjJm[3]);
            var flidEd = [[oAhABg(FcjjJm[2]), oAhABg(FcjjJm[4].split(":")[0])]];
            if (FcjjJm[5] != "") {
              BanHbo = FcjjJm[5].split("_");
              if (BanHbo.length == 2) {
                flidEd.push([oAhABg(BanHbo[0]), oAhABg(BanHbo[1]), true]);
              }
            }
            this.jnjPPP(flidEd);
          }
        } else {
          $warn("GC " + Kllakj);
        }
      }
      if (this.NcJIdp.length > 0 && !bNpjMK) {
        this.ijmngN.aCCjfA();
        var gPbjeM = this.NcJIdp.shift();
        var cGLImA = heeNHP.NgJdlP(ALDPFj() - gPbjeM[0]);
        FcjjJm = gPbjeM[1];
        var ninAcH = FcjjJm.length;
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          GApkjE = FcjjJm[nJikla].split("#");
          Kllakj = GApkjE[0];
          if (Kllakj == "p") {
            if (GApkjE.length < 4) {
              this.ijmngN.CLhPIl(
                GApkjE[1],
                gfKdjj("computer_player"),
                GApkjE[3]
              );
            } else {
              this.ijmngN.CLhPIl(GApkjE[1], GApkjE[2], GApkjE[3]);
            }
          } else if (Kllakj == "s") {
          } else if (Kllakj == "i") {
            this.ijmngN.GlccOi(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "h") {
            this.Fmfanl(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "j") {
            this.jKGJcp(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "c") {
            this.ijmngN.FhKkhP(GApkjE[1]);
          } else if (Kllakj == "t") {
            this.ijmngN.BbIcIh(oAhABg(GApkjE[1]) + cGLImA, GApkjE[2]);
          } else if (Kllakj == "e") {
            this.ijmngN.ANjAml(GApkjE[1]);
          } else if (Kllakj == "r") {
            this.ijmngN.CPiinh(GApkjE[1], oAhABg(GApkjE[2]) + cGLImA);
          } else if (Kllakj == "w") {
            this.ijmngN.pHlLKH();
            if (this.jJPDNf) {
              this.daNEef = GApkjE;
            } else {
              this.Ohijha = false;
              this.oHNLbe = 0;
              this.EGCclp = 0;
              this.KImhEM = 0;
              this.oHICAN([]);
              this.gaKJIa();
              this.CaPjfF = null;
              this.LMgghH = {};
              this.ijmngN.pHlLKH();
              this.ijmngN.NblciE(
                GApkjE[1],
                GApkjE[2],
                GApkjE[3],
                GApkjE[4],
                GApkjE[5],
                GApkjE[6]
              );
              this.daNEef = null;
            }
          } else if (Kllakj == "v") {
            this.ijmngN.pMgBMk();
            var pIilIH = GApkjE.length;
            for (var PCFaJc = 1; PCFaJc < pIilIH; PCFaJc++) {
              this.ijmngN.hKadpl(GApkjE[PCFaJc]);
            }
          } else if (Kllakj == "l") {
            this.ijmngN.hKadpl(GApkjE[1]);
          } else {
            $warn("IC " + Kllakj);
          }
        }
      }
      if (this.DglBmN.length > 0 || this.NcJIdp.length > 0) {
        this.EGKkOn();
      } else if (this.lIKDEP) {
        this.CnbiBg();
      }
    };
    kJfBld.prototype.hcLEeN = function (JcLoBg) {
      if (!this.ohiNnb) {
        return;
      }
      if (!JcLoBg) {
        return;
      }
      if (JcLoBg.hasOwnProperty("gcn")) {
        this.ijmngN.lBhdbN();
      }
      if (JcLoBg.hasOwnProperty("cpi")) {
        this.lPdHHA.dDDJLB = oAhABg(JcLoBg["cpi"]);
      }
      var jCACbJ = false;
      if (JcLoBg.hasOwnProperty("gv")) {
        jCACbJ = true;
        var NGhcmm = String(JcLoBg.gv).split("|");
        var ninAcH = NGhcmm.length;
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          var fefOLc = NGhcmm[nJikla].split("#");
          var DmMGAD = fefOLc[0];
          this.DglBmN.push(fefOLc);
        }
      }
      if (JcLoBg.hasOwnProperty("gs")) {
        jCACbJ = true;
        this.NcJIdp.push([ALDPFj(), String(JcLoBg.gs).split("|")]);
      }
      if (!this.BnkPBg && jCACbJ) {
        this.EGKkOn();
      }
    };
    kJfBld.prototype.lKNOFa = function (fIjFDB) {
      if (!this.ohiNnb) {
        return;
      }
      this.fAilnP();
    };
    kJfBld.prototype.oCJPLH = function (AbPlpB, jkLFeJ) {
      AbPlpB = oAhABg(AbPlpB);
      jkLFeJ = oAhABg(jkLFeJ);
      this.IaHPie = ocPfib();
      this.PdMbho.OomKnE();
      this.MFKnAF = {};
      var NFNlob = this.EIefAg.dBcMeJ;
      NFNlob.table_default.style.backgroundImage =
        'url("' +
        BLAZE.nHKIje.mbcAmA("bitmap", "chess_default_table").src +
        '")';
      NFNlob.table_overlay.classList.remove("transition");
      NFNlob.table_overlay.style.backgroundImage = "none";
      if (AbPlpB > 0) {
        NFNlob.table_overlay.style.display = "block";
        NFNlob.table_overlay.style.opacity = "0";
        var gPbjeM = "chb" + AbPlpB;
        BLAZE.nHKIje.LepiMi(
          gPbjeM,
          lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
          1,
          this.iaDHdE,
          this
        );
      } else {
        NFNlob.table_overlay.style.display = "none";
      }
    };
    kJfBld.prototype.ocNCAH = function () {
      return ocPfib() - this.IaHPie < 1000;
    };
    kJfBld.prototype.iaDHdE = function (mgKkDL, OIBhDm, NKIIgg) {
      if (!NKIIgg || !OIBhDm) {
        return;
      }
      if (!NKIIgg.EIefAg) {
        return;
      }
      var EEfbOm = NKIIgg.EIefAg.dBcMeJ.table_overlay;
      EEfbOm.style.backgroundImage = 'url("' + OIBhDm.src + '")';
      if (!NKIIgg.ocNCAH()) {
        EEfbOm.classList.add("transition");
      }
      EEfbOm.style.opacity = "1";
    };
    kJfBld.prototype.ADnFKL = function (feNOmn) {
      this.CaPjfF = null;
      this.LMgghH = {};
      this.elJmMm = "";
      if (!this.ohiNnb) {
        return;
      }
      if (!this.EIefAg) {
        return;
      }
      var NFNlob = this.EIefAg.dBcMeJ;
      if (this.LNlOgo != this.lPdHHA.dDDJLB) {
        this.LNlOgo = this.lPdHHA.dDDJLB;
        if (this.LNlOgo == 1 || this.LNlOgo == 2) {
          NFNlob.table_base.classList.remove("FlipBoard");
          NFNlob.table_numbers.style.backgroundImage =
            'url("' +
            BLAZE.nHKIje.mbcAmA("bitmap", "chess_numbers_" + this.LNlOgo).src +
            '")';
        } else {
          NFNlob.table_base.classList.add("FlipBoard");
          NFNlob.table_numbers.style.backgroundImage =
            'url("' +
            BLAZE.nHKIje.mbcAmA("bitmap", "chess_numbers_0").src +
            '")';
        }
        var GApkjE;
        var BEoghm = NFNlob.table_sectors;
        for (var nJikla = 0; nJikla < 64; nJikla++) {
          var kiPjJb = NFNlob["s_" + nJikla];
          var jDnaip = nJikla;
          var Cloped = jDnaip % 8;
          var pcjJEl = (jDnaip - Cloped) / 8;
          if (this.LNlOgo == 1) {
            GApkjE = pcjJEl;
            pcjJEl = Cloped;
            Cloped = 7 - GApkjE;
          } else if (this.LNlOgo == 2) {
            GApkjE = pcjJEl;
            pcjJEl = 7 - Cloped;
            Cloped = GApkjE;
          }
          jDnaip = pcjJEl * 8 + Cloped;
          NFNlob["a_" + jDnaip] = kiPjJb;
        }
      }
      this.oHICAN([]);
      this.gaKJIa();
      this.jJPDNf = false;
      this.NIkDbl = [];
      var BMMENN = Object.keys(this.ODEdfI);
      this.ODEdfI = {};
      var NGhcmm = feNOmn.split(";");
      var PbhFfi,
        BanHbo,
        nJikla,
        ninAcH = NGhcmm.length;
      for (nJikla = 0; nJikla < ninAcH; nJikla++) {
        BanHbo = NGhcmm[nJikla].split(":");
        if (BanHbo.length == 2) {
          this.ODEdfI["_" + oAhABg(BanHbo[0])] = [oAhABg(BanHbo[1]), 0];
        } else if (BanHbo.length == 3) {
          this.ODEdfI["_" + oAhABg(BanHbo[0])] = [
            oAhABg(BanHbo[1]),
            oAhABg(BanHbo[2]),
          ];
        }
      }
      var mNKfOl = "";
      var KlaNnm = BMMENN.length;
      for (nJikla = 0; nJikla < KlaNnm; nJikla++) {
        PbhFfi = BMMENN[nJikla];
        if (!this.ODEdfI[PbhFfi]) {
          BanHbo = oAhABg(PbhFfi.substring(1));
          if (BanHbo >= 1 && BanHbo <= 8) {
            mNKfOl = this.jBgBcl;
          } else if (BanHbo >= 21 && BanHbo <= 28) {
            mNKfOl = this.ibcgIe;
          }
        }
      }
      if (mNKfOl != "") {
        if (this.ohiNnb && this.EIefAg && ninAcH > 0) {
          HEOfca.lBHHDa(mNKfOl + "kill", 1, false, 0, true);
        }
      }
      this.hkLImp();
      this.IkeDfA(1);
      this.IkeDfA(2);
    };
    kJfBld.prototype.gOkeLA = function () {
      this.ODEdfI = {};
      this.hkLImp();
    };
    kJfBld.prototype.hkLImp = function () {
      if (!this.ohiNnb) {
        return;
      }
      if (!this.EIefAg) {
        return;
      }
      if (this.LNlOgo < 0) {
        return;
      }
      var HAofFM, bhffAe;
      for (HAofFM in this.ODEdfI) {
        var bhffAe = oAhABg(HAofFM.substring(1));
        var cmgfcO = bhffAe < 21;
        var EEfbOm = this.MFKnAF[HAofFM];
        if (!EEfbOm) {
          if (cmgfcO) {
            EEfbOm = new BLAZE.ePAIpG(this.elpkdd, 1, 4, cIgPbl);
            EEfbOm.nPEmmC = new BLAZE.ePAIpG(this.elpkdd, 1, 4, cIgPbl);
          } else {
            EEfbOm = new BLAZE.ePAIpG(this.llPbji, 1, 4, cIgPbl);
            EEfbOm.nPEmmC = new BLAZE.ePAIpG(this.elpkdd, 1, 4, cIgPbl);
          }
          EEfbOm.hMCCCH(-1, EEfbOm.nPEmmC);
          this.PdMbho.hMCCCH(-1, EEfbOm);
          this.MFKnAF[HAofFM] = EEfbOm;
        }
        var mNeLCb = bhffAe % 20;
        if (this.ODEdfI[HAofFM][1] > 0) {
          mNeLCb = 15;
        }
        if (mNeLCb == 16) {
          mNeLCb = 0;
        } else if (mNeLCb == 15) {
          mNeLCb = 1;
        } else if (mNeLCb >= 13) {
          mNeLCb = 2;
        } else if (mNeLCb >= 11) {
          mNeLCb = 3;
        } else if (mNeLCb >= 9) {
          mNeLCb = 4;
        } else {
          mNeLCb = 5;
        }
        EEfbOm.nPEmmC.aciHoI(mNeLCb + 12);
        if (!cmgfcO) {
          mNeLCb = mNeLCb + 6;
        }
        EEfbOm.aciHoI(mNeLCb);
        gAmDeK.ILFDaD(
          this.ndfiBh(this.ODEdfI[HAofFM][0]),
          this.MFKnAF[HAofFM].nFBFbe
        );
      }
      var cbOAAi = Object.keys(this.MFKnAF);
      var ninAcH = cbOAAi.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        HAofFM = cbOAAi[nJikla];
        if (!this.ODEdfI.hasOwnProperty(HAofFM)) {
          this.PdMbho.IFaBEF(this.MFKnAF[HAofFM]);
          delete this.MFKnAF[HAofFM];
        }
      }
      this.PdMbho.BeDIGn();
    };
    kJfBld.prototype.aibGfc = function (nFBFbe) {
      var GApkjE;
      var Cloped = Math.round(Math.floor(nFBFbe[0] / PanInM));
      var pcjJEl = Math.round(Math.floor(nFBFbe[1] / PanInM));
      if (this.LNlOgo == 1) {
        GApkjE = pcjJEl;
        pcjJEl = Cloped;
        Cloped = 7 - GApkjE;
      } else if (this.LNlOgo == 2) {
        GApkjE = pcjJEl;
        pcjJEl = 7 - Cloped;
        Cloped = GApkjE;
      }
      return [Cloped, pcjJEl];
    };
    kJfBld.prototype.lfaJEc = function (nFBFbe) {
      var GApkjE;
      var Cloped = Math.round(Math.floor(nFBFbe[0] / PanInM));
      var pcjJEl = Math.round(Math.floor(nFBFbe[1] / PanInM));
      if (this.LNlOgo == 1) {
        GApkjE = pcjJEl;
        pcjJEl = Cloped;
        Cloped = 7 - GApkjE;
      } else if (this.LNlOgo == 2) {
        GApkjE = pcjJEl;
        pcjJEl = 7 - Cloped;
        Cloped = GApkjE;
      }
      return Math.round(Cloped + pcjJEl * 8);
    };
    kJfBld.prototype.CbOJOm = function (jDnaip) {
      var Cloped = jDnaip % 8;
      var pcjJEl = (jDnaip - Cloped) / 8;
      return [Cloped, pcjJEl];
    };
    kJfBld.prototype.ndfiBh = function (jDnaip) {
      var GApkjE;
      var Cloped = jDnaip % 8;
      var pcjJEl = (jDnaip - Cloped) / 8;
      if (this.LNlOgo == 1) {
        GApkjE = pcjJEl;
        pcjJEl = 7 - Cloped;
        Cloped = GApkjE;
      } else if (this.LNlOgo == 2) {
        GApkjE = pcjJEl;
        pcjJEl = Cloped;
        Cloped = 7 - GApkjE;
      }
      return [
        Cloped * PanInM + JDJJKH[0],
        pcjJEl * PanInM + JDJJKH[1] + pGmKbj,
      ];
    };
    kJfBld.prototype.nljnOJ = function (jDnaip) {
      var Cloped = jDnaip % 8;
      var pcjJEl = (jDnaip - Cloped) / 8;
      if (pcjJEl % 2 == 0) {
        return Cloped % 2 != 0;
      } else {
        return Cloped % 2 == 0;
      }
    };
    kJfBld.prototype.Fmfanl = function (MENKgg, FcjjJm) {
      if (!this.EIefAg) {
        return;
      }
      if (MENKgg != 1 && MENKgg != 2) {
        return;
      }
      this.eKgBEN["_" + MENKgg] = [];
      this.jKGJcp(MENKgg, FcjjJm);
    };
    kJfBld.prototype.jKGJcp = function (MENKgg, FcjjJm) {
      if (!this.EIefAg) {
        return;
      }
      if (MENKgg != 1 && MENKgg != 2) {
        return;
      }
      var LbKKlK = this.eKgBEN["_" + MENKgg];
      var BanHbo = FcjjJm.split(":");
      var ninAcH = BanHbo.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        var GApkjE = BanHbo[nJikla].split(".");
        if (GApkjE.length == 2) {
          LbKKlK.push([oAhABg(GApkjE[0]), oAhABg(GApkjE[1])]);
        }
      }
      this.IkeDfA(MENKgg);
    };
    kJfBld.prototype.IkeDfA = function (MENKgg) {
      if (!this.EIefAg) {
        return;
      }
      if (!this.elpkdd || !this.llPbji) {
        return;
      }
      var HGpCdd;
      var BmeGLL = "";
      if (this.LNlOgo == 1) {
        if (MENKgg == 1) {
          BmeGLL = 'url("' + this.llPbji.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_1"];
        } else if (MENKgg == 2) {
          BmeGLL = 'url("' + this.elpkdd.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_2"];
        } else {
          return;
        }
      } else if (this.LNlOgo == 2) {
        if (MENKgg == 1) {
          BmeGLL = 'url("' + this.llPbji.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_2"];
        } else if (MENKgg == 2) {
          BmeGLL = 'url("' + this.elpkdd.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_1"];
        } else {
          return;
        }
      } else {
        if (MENKgg == 1) {
          BmeGLL = 'url("' + this.llPbji.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_2"];
        } else if (MENKgg == 2) {
          BmeGLL = 'url("' + this.elpkdd.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_1"];
        } else {
          return;
        }
      }
      var LbKKlK = this.eKgBEN["_" + MENKgg];
      var EEfbOm,
        ninAcH = LbKKlK.length;
      for (var nJikla = 0; nJikla < ApolOp; nJikla++) {
        var lgLFjN = "S" + nJikla;
        var CmaMod = "E" + nJikla;
        if (nJikla >= ninAcH) {
          EEfbOm = HGpCdd[CmaMod];
          if (EEfbOm) {
            if (EEfbOm.parentNode) {
              EEfbOm.parentNode.removeChild(EEfbOm);
            }
            EEfbOm = null;
            delete HGpCdd[CmaMod];
          }
          EEfbOm = HGpCdd[lgLFjN];
          if (EEfbOm) {
            if (EEfbOm.parentNode) {
              EEfbOm.parentNode.removeChild(EEfbOm);
            }
            EEfbOm = null;
            delete HGpCdd[lgLFjN];
          }
        } else {
          var GApkjE = LbKKlK[nJikla];
          var cmgfcO = GApkjE[0] < 21;
          var mNeLCb = GApkjE[0] % 20;
          if (GApkjE[1] > 0) {
            mNeLCb = 15;
          }
          if (mNeLCb == 16) {
            mNeLCb = 0;
          } else if (mNeLCb == 15) {
            mNeLCb = 1;
          } else if (mNeLCb >= 13) {
            mNeLCb = 2;
          } else if (mNeLCb >= 11) {
            mNeLCb = 3;
          } else if (mNeLCb >= 9) {
            mNeLCb = 4;
          } else {
            mNeLCb = 5;
          }
          EEfbOm = HGpCdd[lgLFjN];
          if (!EEfbOm) {
            EEfbOm = document.createElement("div");
            HGpCdd[lgLFjN] = EEfbOm;
            HGpCdd.appendChild(EEfbOm);
          }
          EEfbOm.style.backgroundImage = BmeGLL;
          EEfbOm.className = "ChessShadow Frame" + (mNeLCb + 12);
          EEfbOm = HGpCdd[CmaMod];
          if (!EEfbOm) {
            EEfbOm = document.createElement("div");
            HGpCdd[CmaMod] = EEfbOm;
            HGpCdd[lgLFjN].appendChild(EEfbOm);
          }
          EEfbOm.style.backgroundImage = BmeGLL;
          if (cmgfcO) {
            EEfbOm.className = "ChessFigure Frame" + mNeLCb;
          } else {
            EEfbOm.className = "ChessFigure Frame" + (mNeLCb + 6);
          }
        }
      }
    };
    kJfBld.prototype.BmDFeM = function (jDnaip) {
      if (!this.EIefAg || !this.MOELIO) {
        return;
      }
      this.gaKJIa();
      if (this.MOELIO.parentNode) {
        this.MOELIO.parentNode.removeChild(this.MOELIO);
      }
      this.MOELIO.classList.remove("Transition");
      this.MOELIO.style.opacity = 1;
      var NFNlob = this.EIefAg.dBcMeJ;
      var BNlnCD = "a_" + jDnaip;
      if (!NFNlob[BNlnCD]) {
        return;
      }
      NFNlob[BNlnCD].appendChild(this.MOELIO);
    };
    kJfBld.prototype.gaKJIa = function () {
      if (this.MOELIO) {
        this.MOELIO.classList.add("Transition");
        this.MOELIO.style.opacity = 0;
      }
    };
    kJfBld.prototype.GEPIeI = function (jDnaip) {
      if (!this.EIefAg || !this.JCacHo) {
        return;
      }
      if (this.JCacHo.parentNode) {
        this.JCacHo.parentNode.removeChild(this.JCacHo);
      }
      var NFNlob = this.EIefAg.dBcMeJ;
      var BNlnCD = "a_" + jDnaip;
      if (!NFNlob[BNlnCD]) {
        return;
      }
      NFNlob[BNlnCD].appendChild(this.JCacHo);
      this.JCacHo.style.display = "none";
      this.JCacHo.classList.remove("Animation");
      this.JCacHo.style.display = "";
      this.JCacHo.classList.add("Animation");
    };
    kJfBld.prototype.oHICAN = function (BEoghm) {
      if (!this.EIefAg) {
        return;
      }
      var NFNlob = this.EIefAg.dBcMeJ;
      var KiEicb = {};
      var nJikla,
        ninAcH = BEoghm.length;
      for (nJikla = 0; nJikla < ninAcH; nJikla++) {
        KiEicb["_" + BEoghm[nJikla]] = true;
      }
      for (nJikla = 0; nJikla < 64; nJikla++) {
        var kiPjJb = NFNlob["a_" + nJikla];
        if (kiPjJb) {
          if (KiEicb["_" + nJikla]) {
            if (this.nljnOJ(nJikla)) {
              kiPjJb.classList.add("CH_White");
            } else {
              kiPjJb.classList.add("CH_Black");
            }
          } else {
            kiPjJb.classList.remove("CH_Black");
            kiPjJb.classList.remove("CH_White");
          }
        }
      }
    };
    kJfBld.prototype.KHmIfA = function (bhffAe, CFhblL) {
      if (!CFhblL) {
        return;
      }
      if (!this.ohiNnb) {
        return;
      }
      var MhHdkH = [];
      var ninAcH = CFhblL.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        MhHdkH.push([bhffAe, oAhABg(CFhblL[nJikla])]);
      }
      this.jnjPPP(MhHdkH);
    };
    kJfBld.prototype.jnjPPP = function (MhHdkH) {
      if (!MhHdkH) {
        return;
      }
      if (!this.ohiNnb) {
        return;
      }
      if (this.jJPDNf) {
        var ninAcH = this.NIkDbl.length;
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          var AaOFfK = this.NIkDbl[nJikla];
          var HAofFM = "_" + AaOFfK[0];
          var iIpIKo = oAhABg(AaOFfK[1]) % 64;
          if (this.MFKnAF[HAofFM]) {
            this.MFKnAF[HAofFM].nFBFbe = this.ndfiBh(iIpIKo);
          }
        }
        this.PdMbho.BeDIGn();
      }
      this.jJPDNf = true;
      this.NIkDbl = MhHdkH;
      this.mBfdJB();
    };
    kJfBld.prototype.mBfdJB = function () {
      if (!this.ohiNnb || !this.jJPDNf) {
        return;
      }
      var CfMGEe;
      if (this.cgeiLp != "") {
        if (this.MFKnAF[this.cgeiLp]) {
          this.PdMbho.IFaBEF(this.MFKnAF[this.cgeiLp]);
          delete this.MFKnAF[this.cgeiLp];
        }
        this.cgeiLp = "";
      }
      if (this.IeMJGm > 20) {
        CfMGEe = this.jBgBcl;
      } else {
        CfMGEe = this.ibcgIe;
      }
      if (this.IeMJGm > 0) {
        if (this.HHiGNa) {
          HEOfca.lBHHDa(CfMGEe + "hit", 1, false, 0, true);
        }
      }
      if (this.NIkDbl.length < 1) {
        if (this.eHENDa) {
          this.PdMbho.KODAKp();
          this.PdMbho.DKdIND();
          this.eHENDa.nPEmmC.olcjkN = true;
          this.eHENDa = null;
        }
        this.IeMJGm = -1;
        this.jJPDNf = false;
        if (this.elJmMm != "") {
          this.ADnFKL(this.elJmMm);
        } else {
          this.PdMbho.BeDIGn();
        }
        if (this.Ohijha) {
          if (this.nMMmiP) {
            if (this.JfanJB) {
              this.oHICAN(this.nMMmiP.BEoghm);
            }
          }
        }
        if (this.daNEef) {
          this.Ohijha = false;
          this.oHNLbe = 0;
          this.EGCclp = 0;
          this.KImhEM = 0;
          this.oHICAN([]);
          this.gaKJIa();
          this.CaPjfF = null;
          this.LMgghH = {};
          this.ijmngN.pHlLKH();
          this.ijmngN.NblciE(
            this.daNEef[1],
            this.daNEef[2],
            this.daNEef[3],
            this.daNEef[4],
            this.daNEef[5],
            this.daNEef[6]
          );
          this.daNEef = null;
        }
        if (this.lIKDEP) {
          this.CnbiBg();
        }
      } else {
        var AaOFfK = this.NIkDbl.shift();
        var HAofFM = "_" + AaOFfK[0];
        var iIpIKo = oAhABg(AaOFfK[1]) % 64;
        if (this.MFKnAF[HAofFM]) {
          if (!this.Ohijha) {
            this.GEPIeI(iIpIKo);
          }
          this.jJPDNf = true;
          this.IeMJGm = AaOFfK[0];
          this.cgeiLp = "";
          this.eHENDa = this.MFKnAF[HAofFM];
          this.CoajNh = iIpIKo;
          this.iPkgOG = this.ndfiBh(iIpIKo);
          this.LljCGc = gAmDeK.hhcCkm(this.eHENDa.nFBFbe);
          this.bEHIHi = gAmDeK.kbKEhc(this.iPkgOG, this.LljCGc);
          this.HanOMI = gAmDeK.LPNBNn(this.bEHIHi);
          this.gNEdBe = this.HanOMI * 0.5;
          this.ABNNLb = 1 / this.gNEdBe / this.gNEdBe;
          this.cpcCEI = 0;
          this.aLOcBM = 0;
          if (AaOFfK.length > 2) {
            this.HHiGNa = true;
          } else {
            this.HHiGNa = this.IeMJGm % 20;
            this.HHiGNa = this.HHiGNa == 11 || this.HHiGNa == 12;
          }
          if (this.HanOMI / PanInM > 1.9) {
            this.hOciMp = iocbhP;
          } else {
            this.hOciMp = BKNiJh;
          }
          var nJikla, NjelFn;
          var iPeNAB = {};
          for (var cHEhJc in this.ODEdfI) {
            if (this.ODEdfI[cHEhJc][0] == iIpIKo) {
              this.cgeiLp = cHEhJc;
              break;
            }
          }
          if (this.IeMJGm > 20) {
            CfMGEe = this.jBgBcl;
          } else {
            CfMGEe = this.ibcgIe;
          }
          this.PdMbho.innjPe(this.eHENDa);
          if (this.HHiGNa) {
            this.eHENDa.nPEmmC.olcjkN = false;
          } else {
            this.eHENDa.nPEmmC.olcjkN = true;
            HEOfca.lBHHDa(CfMGEe + "move", 1, false, 0, true);
          }
          if (this.cgeiLp != "") {
            var oAaADp = oAhABg(this.cgeiLp.substring(1));
            if (oAaADp < 21) {
              CfMGEe = this.jBgBcl;
            } else {
              CfMGEe = this.ibcgIe;
            }
            HEOfca.lBHHDa(CfMGEe + "kill", 1, false, 0, true);
          }
        } else {
          this.mBfdJB();
        }
      }
    };
    kJfBld.prototype.fAilnP = function () {
      if (!this.jJPDNf) {
        return;
      }
      if (this.eHENDa) {
        this.cpcCEI = this.cpcCEI + BLAZE.nJcHkO.PjCOjo;
        if (this.cpcCEI < this.hOciMp) {
          this.aLOcBM = (this.cpcCEI / this.hOciMp) * this.HanOMI;
          var iFgaFL = gAmDeK.GLomjE(this.bEHIHi, this.aLOcBM / this.HanOMI);
          gAmDeK.dobFPC(iFgaFL, this.LljCGc);
          if (this.HHiGNa) {
            var LAiAaC = Math.abs(this.aLOcBM - this.gNEdBe);
            LAiAaC = fNGPHB - fNGPHB * LAiAaC * LAiAaC * this.ABNNLb;
            iFgaFL[1] = iFgaFL[1] - LAiAaC;
          }
          this.eHENDa.nFBFbe = iFgaFL;
          this.PdMbho.BeDIGn();
          return;
        }
        this.eHENDa.nFBFbe = this.iPkgOG;
      }
      this.mBfdJB();
      this.PdMbho.BeDIGn();
    };
    kJfBld.prototype.bpFcAb = function (kOcBHb) {
      var EEfbOm = kOcBHb.target;
      if (kOcBHb.type == "touchend") {
        if (kOcBHb.changedTouches.length < 1) {
          return;
        }
        var mbCOgG = kOcBHb.changedTouches[0];
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
        EEfbOm = document.elementFromPoint(mbCOgG.clientX, mbCOgG.clientY);
      } else if (kOcBHb.type == "touchstart") {
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
      }
      if (!EEfbOm) {
        return;
      }
      if (!EEfbOm.parentNode) {
        return;
      }
      if (!EEfbOm.parentNode.liadmE) {
        return;
      }
      EEfbOm.parentNode.liadmE.HpEKld(kOcBHb.type, EEfbOm.jDnaip);
    };
    kJfBld.prototype.HpEKld = function (MPFgaL, jDnaip) {
      if (this.lIKDEP) {
        this.ecPihA();
        return;
      }
      if (
        !this.ohiNnb ||
        !this.lPdHHA.EAflFm ||
        this.jJPDNf ||
        this.oHNLbe < 1
      ) {
        return;
      }
      jDnaip = oAhABg(jDnaip);
      var GApkjE, CfMGEe, nJikla, ninAcH;
      var Cloped = jDnaip % 8;
      var pcjJEl = (jDnaip - Cloped) / 8;
      if (this.LNlOgo == 1) {
        GApkjE = pcjJEl;
        pcjJEl = Cloped;
        Cloped = 7 - GApkjE;
      } else if (this.LNlOgo == 2) {
        GApkjE = pcjJEl;
        pcjJEl = 7 - Cloped;
        Cloped = GApkjE;
      }
      jDnaip = pcjJEl * 8 + Cloped;
      var bhffAe = 0;
      for (var HAofFM in this.ODEdfI) {
        if (this.ODEdfI[HAofFM][0] == jDnaip) {
          bhffAe = oAhABg(HAofFM.substring(1));
          break;
        }
      }
      this.lBbKEH(this.oHNLbe);
      if (this.EGCclp == 0) {
        if (MPFgaL == "mousedown" || MPFgaL == "touchstart") {
          if (bhffAe > 0) {
            if (this.oHNLbe == 1) {
              if (bhffAe > 20) {
                return;
              }
              CfMGEe = this.ibcgIe;
            } else if (this.oHNLbe == 2) {
              if (bhffAe < 21) {
                return;
              }
              CfMGEe = this.jBgBcl;
            } else {
              return;
            }
            HEOfca.lBHHDa(CfMGEe + "click", 1, false, 0, true);
            this.AmMkPL = [];
            this.EGCclp = bhffAe;
            this.KImhEM = jDnaip;
            this.BmDFeM(jDnaip);
            this.nMMmiP = this.ceMhGm(this.EGCclp);
            if (this.JfanJB) {
              this.oHICAN(this.nMMmiP.BEoghm);
            }
          }
        }
      } else {
        if (MPFgaL == "mousedown" || MPFgaL == "touchstart") {
          if (!this.Ohijha) {
            if (this.EGCclp == bhffAe || this.KImhEM == jDnaip) {
            } else {
              if (bhffAe > 0) {
                if (!this.nCIeej) {
                  if (!BLAZE.nHKIje.fKjIAA()) {
                    this.ohiNnb = false;
                    BLAZE.global.gs.cqi();
                    return;
                  }
                  this.nCIeej = true;
                }
                if (this.oHNLbe == 1) {
                  if (bhffAe > 20) {
                    return;
                  }
                  CfMGEe = this.ibcgIe;
                } else if (this.oHNLbe == 2) {
                  if (bhffAe < 21) {
                    return;
                  }
                  CfMGEe = this.jBgBcl;
                } else {
                  return;
                }
                this.AmMkPL = [];
                this.EGCclp = bhffAe;
                this.KImhEM = jDnaip;
                this.BmDFeM(jDnaip);
                this.nMMmiP = this.ceMhGm(this.EGCclp);
                if (this.JfanJB) {
                  this.oHICAN(this.nMMmiP.BEoghm);
                }
                HEOfca.lBHHDa(CfMGEe + "click", 1, false, 0, true);
              }
            }
          }
        } else if (MPFgaL == "mouseup" || MPFgaL == "touchend") {
          if (this.nMMmiP) {
            var FpFkPE = "_" + jDnaip;
            if (this.nMMmiP.hasOwnProperty(FpFkPE)) {
              this.AmMkPL.push(jDnaip);
              this.oHICAN([]);
              var flidEd = [[this.EGCclp, jDnaip]];
              if (this.EGCclp == 16 || this.EGCclp == 36) {
                ninAcH = this.JBckim.length;
                for (nJikla = 0; nJikla < ninAcH; nJikla++) {
                  var gpFhnc = this.JBckim[nJikla];
                  if (jDnaip == gpFhnc[1]) {
                    flidEd.push([gpFhnc[0], gpFhnc[2], true]);
                  }
                }
              }
              this.jnjPPP(flidEd);
              var kjNIIF = this.nMMmiP[FpFkPE];
              if (kjNIIF > 0) {
                kjNIIF = "_" + kjNIIF;
                if (this.ODEdfI[kjNIIF]) {
                  delete this.ODEdfI[kjNIIF];
                }
              }
              this.ODEdfI["_" + this.EGCclp][0] = jDnaip;
              this.nMMmiP = null;
              this.CaPjfF = null;
              this.LMgghH = {};
              this.oHNLbe = 0;
              this.gaKJIa();
              this.ijmngN.KPeAhF({
                c: "move",
                v: this.EGCclp + ":" + this.AmMkPL.join(":"),
              });
              this.AmMkPL = [];
              this.ijmngN.KafPBn();
            }
          }
        }
      }
    };
    kJfBld.prototype.ceMhGm = function (bhffAe) {
      if (this.CaPjfF) {
        var HAofFM = "_" + bhffAe;
        if (this.CaPjfF[HAofFM]) {
          return this.CaPjfF[HAofFM];
        }
      }
      return {
        BEoghm: [],
      };
    };
    kJfBld.prototype.lBbKEH = function (OLIGEF) {
      if (this.CaPjfF) {
        return;
      }
      this.CaPjfF = {};
      this.LMgghH = {};
      var nJikla, ninAcH, HAofFM, bhffAe;
      var ebHmFe = [];
      var NOMhJp = [];
      var iPeNAB = {};
      for (HAofFM in this.ODEdfI) {
        bhffAe = oAhABg(HAofFM.substring(1));
        iPeNAB["_" + this.ODEdfI[HAofFM][0]] = bhffAe;
        if (OLIGEF == 1) {
          if (bhffAe < 21) {
            ebHmFe.push(bhffAe);
            continue;
          }
        } else {
          if (bhffAe > 20) {
            ebHmFe.push(bhffAe);
            continue;
          }
        }
        NOMhJp.push(bhffAe);
      }
      ninAcH = NOMhJp.length;
      for (nJikla = 0; nJikla < ninAcH; nJikla++) {
        bhffAe = NOMhJp[nJikla];
        HAofFM = "_" + bhffAe;
        this.bgEPKD(bhffAe, iPeNAB, true);
      }
      ninAcH = ebHmFe.length;
      for (nJikla = 0; nJikla < ninAcH; nJikla++) {
        bhffAe = ebHmFe[nJikla];
        HAofFM = "_" + bhffAe;
        this.CaPjfF[HAofFM] = this.bgEPKD(bhffAe, iPeNAB, false);
      }
      ninAcH = NOMhJp.length;
      var MaNNFN = Object.keys(this.CaPjfF);
      var KlaNnm = MaNNFN.length;
      for (var mOlpnk = 0; mOlpnk < KlaNnm; mOlpnk++) {
        HAofFM = MaNNFN[mOlpnk];
        bhffAe = oAhABg(HAofFM.substring(1));
        var kdOmjD = this.CaPjfF[HAofFM];
        var LNehhp = {
          BEoghm: [],
        };
        for (var NjelFn in kdOmjD) {
          var AacHej = oAhABg(NjelFn.substring(1));
          if (NjelFn[0] == "_") {
            var dEjEAp = 0;
            var MFdmkG = this.pGhaJa(iPeNAB, bhffAe);
            if (MFdmkG.hasOwnProperty(NjelFn)) {
              dEjEAp = MFdmkG[NjelFn];
            }
            MFdmkG[NjelFn] = bhffAe;
            var NjPKbJ = false;
            for (nJikla = 0; nJikla < ninAcH; nJikla++) {
              if (dEjEAp != NOMhJp[nJikla]) {
                var MhHdkH = this.bgEPKD(NOMhJp[nJikla], MFdmkG, false);
                if (MhHdkH.NjPKbJ) {
                  NjPKbJ = true;
                  break;
                }
              }
            }
            if (NjPKbJ) {
              continue;
            }
            LNehhp[NjelFn] = kdOmjD[NjelFn];
            LNehhp.BEoghm.push(AacHej);
          }
        }
        if (LNehhp.BEoghm.length > 0) {
          this.CaPjfF[HAofFM] = LNehhp;
        } else {
          delete this.CaPjfF[HAofFM];
        }
      }
    };
    kJfBld.prototype.bgEPKD = function (bhffAe, iPeNAB, dJLfef) {
      var nJikla,
        ninAcH,
        cHEhJc,
        mOlpnk,
        gpFhnc,
        NjelFn,
        AacHej,
        HAofFM,
        JFfKpC,
        LAiAaC;
      var GjfdEI = this.fHCfBo[1];
      var MhHdkH = {
        BEoghm: [],
        NjPKbJ: false,
      };
      HAofFM = "_" + bhffAe;
      if (!this.ODEdfI[HAofFM]) {
        return MhHdkH;
      }
      var InDjMI = this.ODEdfI[HAofFM][0];
      var lACBMH = this.CbOJOm(InDjMI);
      var HFLFgb = false;
      var cmgfcO = bhffAe < 21;
      var PfMmeI, jgAeim;
      var EHfGjk = bhffAe % 20;
      if (this.ODEdfI[HAofFM][1] > 0) {
        EHfGjk = 15;
      }
      var oPHHBj = null;
      var dpmjKn = null;
      if (EHfGjk == 16) {
        HFLFgb = true;
        oPHHBj = this.bcapMH._6;
      } else if (EHfGjk == 15) {
        oPHHBj = this.bcapMH._5;
      } else if (EHfGjk >= 13) {
        oPHHBj = this.bcapMH._4;
      } else if (EHfGjk >= 11) {
        oPHHBj = this.bcapMH._3;
      } else if (EHfGjk >= 9) {
        oPHHBj = this.bcapMH._2;
      } else {
        if (cmgfcO) {
          if (lACBMH[0] == 1) {
            oPHHBj = this.bcapMH._1WF;
          } else {
            oPHHBj = this.bcapMH._1W;
          }
          dpmjKn = this.bcapMH._1WC;
        } else {
          if (lACBMH[0] == 6) {
            oPHHBj = this.bcapMH._1BF;
          } else {
            oPHHBj = this.bcapMH._1B;
          }
          dpmjKn = this.bcapMH._1BC;
        }
      }
      if (HFLFgb && !dJLfef) {
        ninAcH = this.JBckim.length;
        for (nJikla = 0; nJikla < ninAcH; nJikla++) {
          gpFhnc = this.JBckim[nJikla];
          AacHej = gpFhnc[1];
          MhHdkH["_" + AacHej] = gpFhnc[0];
          MhHdkH.BEoghm.push(AacHej);
        }
      }
      var hBiaPA = oPHHBj.length;
      for (mOlpnk = 0; mOlpnk < hBiaPA; mOlpnk++) {
        gpFhnc = oPHHBj[mOlpnk];
        ninAcH = gpFhnc.length;
        for (nJikla = 0; nJikla < ninAcH; nJikla++) {
          JFfKpC = gAmDeK.ADJoEM(lACBMH, gpFhnc[nJikla]);
          if (JFfKpC[0] < 0 || JFfKpC[0] > 7) {
            continue;
          }
          if (JFfKpC[1] < 0 || JFfKpC[1] > 7) {
            continue;
          }
          AacHej = JFfKpC[1] * 8 + JFfKpC[0];
          NjelFn = "_" + AacHej;
          if (HFLFgb && !dJLfef) {
            if (this.LMgghH[NjelFn]) {
              break;
            }
          }
          if (!iPeNAB.hasOwnProperty(NjelFn)) {
            if (dJLfef && !dpmjKn) {
              this.LMgghH[NjelFn] = true;
            }
            MhHdkH[NjelFn] = 0;
            MhHdkH.BEoghm.push(AacHej);
          } else if (dpmjKn) {
            break;
          } else {
            cHEhJc = iPeNAB[NjelFn];
            if (this.ODEdfI["_" + cHEhJc]) {
              if (cmgfcO && cHEhJc < 21) {
              } else if (!cmgfcO && cHEhJc > 20) {
              } else {
                if (dJLfef && !dpmjKn) {
                  this.LMgghH[NjelFn] = true;
                }
                MhHdkH[NjelFn] = cHEhJc;
                MhHdkH.BEoghm.push(AacHej);
                if (cHEhJc == 16 || cHEhJc == 36) {
                  MhHdkH.NjPKbJ = true;
                }
              }
              break;
            }
          }
        }
      }
      if (dpmjKn) {
        hBiaPA = dpmjKn.length;
        for (mOlpnk = 0; mOlpnk < hBiaPA; mOlpnk++) {
          gpFhnc = dpmjKn[mOlpnk];
          ninAcH = gpFhnc.length;
          for (nJikla = 0; nJikla < ninAcH; nJikla++) {
            JFfKpC = gAmDeK.ADJoEM(lACBMH, gpFhnc[nJikla]);
            if (JFfKpC[0] < 0 || JFfKpC[0] > 7) {
              continue;
            }
            if (JFfKpC[1] < 0 || JFfKpC[1] > 7) {
              continue;
            }
            AacHej = JFfKpC[1] * 8 + JFfKpC[0];
            NjelFn = "_" + AacHej;
            if (!iPeNAB.hasOwnProperty(NjelFn)) {
              if (dJLfef) {
                this.LMgghH[NjelFn] = true;
              }
              break;
            } else {
              cHEhJc = iPeNAB[NjelFn];
              if (this.ODEdfI["_" + cHEhJc]) {
                if (cmgfcO && cHEhJc < 21) {
                } else if (!cmgfcO && cHEhJc > 20) {
                } else {
                  if (dJLfef) {
                    this.LMgghH[NjelFn] = true;
                  }
                  MhHdkH[NjelFn] = cHEhJc;
                  MhHdkH.BEoghm.push(AacHej);
                  if (cHEhJc == 16 || cHEhJc == 36) {
                    MhHdkH.NjPKbJ = true;
                  }
                }
                break;
              }
            }
          }
        }
        oPHHBj = [
          [0, 1],
          [0, -1],
        ];
        hBiaPA = oPHHBj.length;
        for (nJikla = 0; nJikla < hBiaPA; nJikla++) {
          JFfKpC = gAmDeK.ADJoEM(lACBMH, oPHHBj[nJikla]);
          if (JFfKpC[0] < 0 || JFfKpC[0] > 7) {
            continue;
          }
          if (JFfKpC[1] < 0 || JFfKpC[1] > 7) {
            continue;
          }
          AacHej = JFfKpC[1] * 8 + JFfKpC[0];
          NjelFn = "_" + AacHej;
          if (iPeNAB.hasOwnProperty(NjelFn)) {
            cHEhJc = iPeNAB[NjelFn];
            if (this.bNnnnp["_" + cHEhJc]) {
              if (cmgfcO) {
                JFfKpC[0] = JFfKpC[0] + 1;
              } else {
                JFfKpC[0] = JFfKpC[0] - 1;
              }
              AacHej = JFfKpC[1] * 8 + JFfKpC[0];
              NjelFn = "_" + AacHej;
              if (!iPeNAB.hasOwnProperty(NjelFn)) {
                MhHdkH[NjelFn] = 999;
                MhHdkH.BEoghm.push(AacHej);
              }
            }
          }
        }
      }
      return MhHdkH;
    };
    kJfBld.prototype.pGhaJa = function (iPeNAB, GnbImj) {
      var MFdmkG = {};
      for (var jDnaip in iPeNAB) {
        var bhffAe = iPeNAB[jDnaip];
        if (GnbImj != bhffAe) {
          MFdmkG[jDnaip] = bhffAe;
        }
      }
      return MFdmkG;
    };
    return function () {
      return new lPdHHA(new kJfBld(arguments));
    };
  })();
  BLAZE.oIBKHg = oIBKHg;
  var BPhngk = (function () {
    var lDkhIC = BLAZE.GetENV("PROJECT_CONTENT_URL");
    var cmbjGA = [1400, 1000];
    var cIgPbl = [2, 3];
    var PanInM = 116;
    var GdBLBh = 36;
    var JDJJKH = [94, 94];
    var ApolOp = 12;
    var BKNiJh = 0.15;
    var iocbhP = 0.3;
    var fNGPHB = 120;
    var JkDLhk = Math.round(Math.random() * 1000000);
    var lcILbb = BLAZE.nHKIje.mFfklh(JkDLhk);
    var lPdHHA = function (nAJgdM) {
      var jnJBBo = nAJgdM;
      nAJgdM.lPdHHA = this;
      this.dDDJLB = 0;
      this.EAflFm = false;
      this.bDJojN = false;
      this.HJLhEI = function (CbINMc) {
        if (CbINMc != lcILbb) {
          window.location.href = "/";
        }
        return JkDLhk;
      };
      this.fFMGmD = function (kEmakh, nHhEnP, mHDNEJ) {
        return jnJBBo.fFMGmD(kEmakh, nHhEnP, mHDNEJ);
      };
      this.GIfDAK = function () {
        jnJBBo.GIfDAK();
      };
      this.efoilB = function (FcjjJm) {
        jnJBBo.efoilB(FcjjJm);
      };
      this.lBgbNP = function () {
        jnJBBo.lBgbNP();
      };
      this.FKFMmF = function () {
        jnJBBo.FKFMmF();
      };
      this.HeedgM = function () {
        jnJBBo.HeedgM();
      };
      this.hcLEeN = function (JcLoBg) {
        jnJBBo.hcLEeN(JcLoBg);
      };
      this.iPJlAG = function (iOKbkM) {
        jnJBBo.iPJlAG(iOKbkM);
      };
      this.lKNOFa = function (fIjFDB) {
        jnJBBo.lKNOFa(fIjFDB);
      };
      this.eEelho = function (CIkflk) {
        jnJBBo.eEelho(CIkflk);
      };
    };
    var kJfBld = function (pKiKCF) {
      this.PpKPIa(pKiKCF);
    };
    kJfBld.prototype.PpKPIa = function (pKiKCF) {
      if (pKiKCF.length < 2) {
        $error(20819591);
        return;
      }
      if (this.ijmngN) {
        $error(20819592);
        return;
      }
      if (!FlhgdA(pKiKCF[0])) {
        $error(20819593);
        return;
      }
      if (pKiKCF[1]) {
        ipiMeH = 1;
      } else {
        ipiMeH = 0;
      }
      this.lPdHHA = null;
      this.FMdgGo = BLAZE.nHKIje.OCAilP();
      this.ohiNnb = false;
      this.ciNgdE();
      this.ijmngN = pKiKCF[0];
      this.HGpCdd = null;
      this.ocBnBA = null;
      this.ImkhAe = null;
      this.eHDpeC = null;
      this.PdMbho = new BLAZE.CbIDAm(
        "ChessRenderer",
        cmbjGA[1],
        cmbjGA[1],
        1,
        ipiMeH
      );
      this.PdMbho.ILMNDn = true;
      this.PdMbho.jkaFOn = false;
      this.PdMbho.jfgmcH = false;
      this.PdMbho.EEfbOm.GmKkeP = true;
      this.EIefAg = BLAZE.nHKIje.mbcAmA("element", "game.checkers_table");
      if (!this.EIefAg) {
        $error(63950928);
        return;
      }
      eCaHCJ.hdhbKA(this.EIefAg);
      this.EIefAg.oBAgKJ = true;
      var NFNlob = this.EIefAg.dBcMeJ;
      var BEoghm = NFNlob.table_sectors;
      var nJikla = 0;
      for (var fmFfFk = 0; fmFfFk < 8; fmFfFk++) {
        var iFKeAc = document.createElement("div");
        iFKeAc.className = "ChessTableRow";
        iFKeAc.liadmE = this;
        BEoghm.appendChild(iFKeAc);
        for (var Djljdg = 0; Djljdg < 8; Djljdg++) {
          var kiPjJb = BLAZE.nHKIje.HjLjHi("game.checkers_sector", false);
          kiPjJb.jDnaip = nJikla;
          iFKeAc.appendChild(kiPjJb);
          NFNlob["s_" + nJikla] = kiPjJb;
          NFNlob["a_" + nJikla] = kiPjJb;
          nJikla++;
        }
      }
      BEoghm.addEventListener("touchend", this.bpFcAb, true);
      BEoghm.addEventListener("touchstart", this.bpFcAb, true);
      BEoghm.addEventListener("mouseup", this.bpFcAb, true);
      BEoghm.addEventListener("mousedown", this.bpFcAb, true);
      this.MOELIO = BLAZE.nHKIje.mbcAmA("element", "game.checkers_select");
      this.JCacHo = BLAZE.nHKIje.mbcAmA("element", "game.checkers_flash");
      var mMnbaJ = this;
    };
    kJfBld.prototype.fFMGmD = function (kEmakh, nHhEnP, mHDNEJ) {
      if (!this.ijmngN) {
        $warn(2290681);
        return false;
      }
      if (this.ohiNnb) {
        $warn(2290682);
        return false;
      }
      if (!kEmakh) {
        $warn(2290683);
        return false;
      }
      if (!nHhEnP) {
        $warn(2290684);
        return false;
      }
      var pPokEL = 0;
      if (mHDNEJ) {
        pPokEL = 1;
      }
      if (ipiMeH != pPokEL) {
        ipiMeH = pPokEL;
        this.PdMbho.OomKnE();
        this.PdMbho.dEbMEc();
        this.PdMbho = new BLAZE.CbIDAm(
          "ChessRenderer",
          cmbjGA[1],
          cmbjGA[1],
          1,
          ipiMeH
        );
        this.PdMbho.ILMNDn = true;
        this.PdMbho.jkaFOn = false;
        this.PdMbho.jfgmcH = false;
        this.PdMbho.EEfbOm.GmKkeP = true;
      }
      this.lPdHHA.dDDJLB = 0;
      this.ciNgdE();
      if (nHhEnP.length != 11) {
        $warn(64223638);
        return false;
      }
      nHhEnP[2] = oAhABg(nHhEnP[2]);
      nHhEnP[3] = oAhABg(nHhEnP[3]);
      nHhEnP[4] = oAhABg(nHhEnP[4]);
      nHhEnP[5] = oAhABg(nHhEnP[5]);
      nHhEnP[6] = oAhABg(nHhEnP[6]);
      nHhEnP[7] = oAhABg(nHhEnP[7]);
      this.fHCfBo = nHhEnP;
      this.JfanJB = nHhEnP[5] == 1;
      this.HGpCdd = kEmakh;
      var dBcMeJ = this.HGpCdd.dBcMeJ;
      this.dbfCbJ = kEmakh.parentNode;
      if (!this.dbfCbJ) {
        $error(95882103);
        return;
      }
      this.ChiCPF = eCaHCJ.fMcHfj(this.dbfCbJ);
      this.ocBnBA = dBcMeJ.GameScoreboard;
      this.ImkhAe = dBcMeJ.GameArea;
      this.McFFpC = dBcMeJ.GameFullZone;
      this.eHDpeC = dBcMeJ.GameTable;
      this.eHDpeC.appendChild(this.EIefAg);
      this.PdMbho.pHloPi(this.eHDpeC);
      this.ijmngN.IPAlBM(cmbjGA, false);
      this.oCJPLH(nHhEnP[7], nHhEnP[8]);
      this.ohiNnb = true;
      return true;
    };
    kJfBld.prototype.GIfDAK = function () {
      if (!this.ijmngN) {
        $warn(59029918);
        return;
      }
      this.Fmfanl(1, "");
      this.Fmfanl(2, "");
      this.oHICAN([]);
      this.gaKJIa();
      this.ciNgdE();
      this.ohiNnb = false;
      if (this.MOELIO) {
        if (this.MOELIO.parentNode) {
          this.MOELIO.parentNode.removeChild(this.MOELIO);
        }
      }
      if (this.JCacHo) {
        if (this.JCacHo.parentNode) {
          this.JCacHo.parentNode.removeChild(this.JCacHo);
        }
      }
      if (this.EIefAg) {
        if (this.EIefAg.parentNode) {
          this.EIefAg.parentNode.removeChild(this.EIefAg);
        }
      }
      if (this.PdMbho) {
        this.PdMbho.dEbMEc();
        this.PdMbho.ccPIHB();
      }
      this.HGpCdd = null;
      this.ocBnBA = null;
      this.ImkhAe = null;
      this.eHDpeC = null;
    };
    kJfBld.prototype.HeedgM = function () {
      this.GIfDAK();
      this.ijmngN = null;
      this.MOELIO = null;
      this.JCacHo = null;
      this.EIefAg = null;
      this.PdMbho = null;
    };
    kJfBld.prototype.ciNgdE = function () {
      this.lIKDEP = null;
      this.jNHelL = false;
      this.IaHPie = 0;
      this.fBlAOP = "";
      this.fHCfBo = null;
      this.JfanJB = false;
      this.eKgBEN = {
        _1: [],
        _2: [],
      };
      this.DglBmN = [];
      this.NcJIdp = [];
      this.ELANMN = 1.0;
      this.bcDNDI = null;
      this.nCIeej = false;
      this.oHNLbe = 0;
      this.GjiMbE = 0;
      this.Ohijha = false;
      this.EGCclp = 0;
      this.KImhEM = 0;
      this.nMMmiP = null;
      this.AmMkPL = [];
      this.LNlOgo = -1;
      this.ibcgIe = "";
      this.jBgBcl = "";
      this.elpkdd = null;
      this.llPbji = null;
      this.ODEdfI = {};
      this.MFKnAF = {};
      this.CaPjfF = null;
      this.elJmMm = "";
      this.daNEef = null;
      this.jJPDNf = false;
      this.hOciMp = 0;
      this.IeMJGm = -1;
      this.NIkDbl = [];
      this.eHENDa = null;
      this.cgeiLp = "";
      this.CoajNh = -1;
      this.LljCGc = null;
      this.iPkgOG = null;
      this.HanOMI = 0;
      this.gNEdBe = 0;
      this.cpcCEI = 0;
      this.aLOcBM = 0;
      this.bEHIHi = null;
      this.ABNNLb = 0;
      this.HHiGNa = false;
    };
    kJfBld.prototype.iPJlAG = function (iOKbkM) {
      if (!this.ohiNnb) {
        return;
      }
      if (this.EIefAg) {
        var KlaNnm = this.EIefAg.dBcMeJ;
        var EEfbOm = KlaNnm.AOgmcK;
        if (!EEfbOm) {
          EEfbOm = KlaNnm.table_super_game;
          if (EEfbOm.parentNode) {
            EEfbOm.parentNode.removeChild(EEfbOm);
          }
          this.eHDpeC.appendChild(EEfbOm);
          KlaNnm.AOgmcK = EEfbOm;
        }
        var KlaNnm = this.EIefAg.dBcMeJ;
        KlaNnm.table_super_game_zp.innerHTML = iOKbkM + " ZP";
        EEfbOm.classList.add("AnimSuperGame");
      }
    };
    kJfBld.prototype.eEelho = function (PjGdcn) {
      if (!this.ohiNnb) {
        return;
      }
      var lkgcaO, GApkjE, CIkflk;
      this.ChiCPF = eCaHCJ.fMcHfj(this.dbfCbJ);
      this.DMMJhj = eCaHCJ.fMcHfj(this.PFOljF);
      PjGdcn[0] -= PjGdcn[0] % 8;
      PjGdcn[1] -= PjGdcn[1] % 8;
      var GmnjNl = PjGdcn[0] + "px";
      var ecLNjB = PjGdcn[1] + "px";
      var hHeOpp = "";
      var JdGffO = "";
      var lOBLpe = "";
      var ACDKLN = PjGdcn[0] >= PjGdcn[1];
      if (ACDKLN) {
        hHeOpp = PjGdcn[1] + "px";
        JdGffO = "0px";
        lOBLpe = Math.round((PjGdcn[0] - PjGdcn[1]) * 0.5) + "px";
        this.ELANMN = PjGdcn[0] / cmbjGA[0];
      } else {
        hHeOpp = PjGdcn[0] + "px";
        JdGffO = Math.round((PjGdcn[1] - PjGdcn[0]) * 0.5) + "px";
        lOBLpe = "0px";
        this.ELANMN = PjGdcn[1] / cmbjGA[0];
      }
      var s, l;
      if (this.EIefAg) {
        s = this.EIefAg.style;
        s.width = s.height = hHeOpp;
        s.top = JdGffO;
        s.left = lOBLpe;
        var NFNlob = this.EIefAg.dBcMeJ;
        NFNlob.table_sectors.style.padding =
          Math.round(GdBLBh * this.ELANMN) + "px";
        var OiKKpb = 0.85;
        var PBKIGO = this.ELANMN * OiKKpb;
        var jmanpC = Math.round((cmbjGA[0] - cmbjGA[1]) * 0.5);
        var MnEPFP, fBleGp, MKIhHo;
        if (ACDKLN) {
          MnEPFP = Math.round(jmanpC / OiKKpb) + "px";
          fBleGp = Math.round(cmbjGA[1] / OiKKpb) + "px";
        } else {
          MnEPFP = Math.round(cmbjGA[1] / OiKKpb) + "px";
          fBleGp = Math.round(jmanpC / OiKKpb) + "px";
        }
        l = NFNlob.stack_2.classList;
        s = NFNlob.stack_2.style;
        s.width = MnEPFP;
        s.height = fBleGp;
        if (ACDKLN) {
          l.remove("StackPortrait");
          l.add("StackLandscape");
          s.top = "0px";
          s.left = "-" + MnEPFP;
          eCaHCJ.cdiJPK(NFNlob.stack_2, PBKIGO, PBKIGO);
        } else {
          l.add("StackPortrait");
          l.remove("StackLandscape");
          s.top = "0px";
          s.left = "0px";
          eCaHCJ.cdiJPK(NFNlob.stack_2, PBKIGO, -PBKIGO);
        }
        l = NFNlob.stack_1.classList;
        s = NFNlob.stack_1.style;
        s.width = MnEPFP;
        s.height = fBleGp;
        if (ACDKLN) {
          l.remove("StackPortrait");
          l.add("StackLandscape");
          s.top = "0px";
          s.bottom = "";
          s.left = "";
          s.right = "-" + MnEPFP;
        } else {
          l.add("StackPortrait");
          l.remove("StackLandscape");
          s.top = "";
          s.bottom = "-" + fBleGp;
          s.left = "0px";
          s.right = "";
        }
        eCaHCJ.cdiJPK(NFNlob.stack_1, PBKIGO, PBKIGO);
      }
      if (this.PdMbho) {
        s = this.PdMbho.EEfbOm.style;
        s.width = s.height = hHeOpp;
        s.top = JdGffO;
        s.left = lOBLpe;
      }
      this.hkLImp();
    };
    kJfBld.prototype.efoilB = function (FcjjJm) {
      if (!FcjjJm) {
        return;
      }
      this.jNHelL = false;
      this.lIKDEP = FcjjJm;
      this.lIKDEP.dHNdGJ = 0;
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      this.bcDNDI = window.setTimeout(this.OLhApP, 50, this);
    };
    kJfBld.prototype.lBgbNP = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      this.ijmngN.aCCjfA();
      this.jNHelL = false;
      this.lIKDEP.dHNdGJ = 0;
      this.bcDNDI = window.setTimeout(this.OLhApP, 50, this);
    };
    kJfBld.prototype.ecPihA = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.lIKDEP.dHNdGJ >= this.lIKDEP.NPlCCd.length - 1) {
        return;
      }
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      this.jNHelL = true;
      this.ijmngN.OjmHEh();
      this.ijmngN.KNilPi();
      this.ijmngN.pHlLKH();
    };
    kJfBld.prototype.FKFMmF = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      this.jNHelL = false;
      this.ijmngN.AoPlEI();
      this.CnbiBg();
    };
    kJfBld.prototype.CnbiBg = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.jJPDNf || this.jNHelL) {
        return;
      }
      if (this.bcDNDI !== null) {
        window.clearTimeout(this.bcDNDI);
      }
      var CchIIl = 1500;
      if (this.lIKDEP.dHNdGJ < 1) {
        CchIIl = 50;
      }
      this.bcDNDI = window.setTimeout(this.hhHnAe, CchIIl, this);
    };
    kJfBld.prototype.OLhApP = function (CdBicM) {
      if (!CdBicM.lIKDEP || !CdBicM.ohiNnb) {
        return;
      }
      CdBicM.EGKkOn();
    };
    kJfBld.prototype.hhHnAe = function (CdBicM) {
      if (!CdBicM.lIKDEP || !CdBicM.ohiNnb) {
        return;
      }
      if (this.jJPDNf || this.jNHelL) {
        return;
      }
      var dHNdGJ = CdBicM.lIKDEP.dHNdGJ;
      var NPlCCd = CdBicM.lIKDEP.NPlCCd;
      if (dHNdGJ < NPlCCd.length) {
        var kiPjJb = NPlCCd[dHNdGJ];
        dHNdGJ = dHNdGJ + 1;
        CdBicM.lIKDEP.dHNdGJ = dHNdGJ;
        CdBicM.hcLEeN(kiPjJb);
      } else {
        CdBicM.ijmngN.AoPlEI();
      }
    };
    kJfBld.prototype.EGKkOn = function () {
      if (!this.ohiNnb) {
        return;
      }
      var GApkjE, lkgcaO, FcjjJm, Kllakj;
      var bNpjMK = false;
      if (this.DglBmN.length > 0) {
        FcjjJm = this.DglBmN.shift();
        Kllakj = FcjjJm[0];
        if (Kllakj == "i") {
          this.fBlAOP = FcjjJm[1];
          this.ijmngN.KpnddA();
          this.oHICAN([]);
          this.gaKJIa();
          this.jJPDNf = false;
          this.NIkDbl = [];
          bNpjMK = true;
          this.gOkeLA();
        } else if (Kllakj == "s") {
          GApkjE = FcjjJm[1].split(",");
          if (GApkjE.length == 2) {
            lkgcaO = oAhABg(GApkjE[0]);
            this.elpkdd = BLAZE.nHKIje.mbcAmA(
              "bitmap",
              "checkers_figures_" + lkgcaO
            );
            this.ibcgIe = "chks_" + lkgcaO + "_";
            lkgcaO = oAhABg(GApkjE[1]);
            this.llPbji = BLAZE.nHKIje.mbcAmA(
              "bitmap",
              "checkers_figures_" + lkgcaO
            );
            this.jBgBcl = "chks_" + lkgcaO + "_";
          }
          if (this.jJPDNf) {
            this.elJmMm = FcjjJm[2];
          } else {
            this.ADnFKL(FcjjJm[2]);
          }
        } else if (Kllakj == "a") {
          this.GjiMbE = oAhABg(FcjjJm[2]);
          this.oHNLbe = oAhABg(FcjjJm[1]);
          this.Ohijha = false;
          this.EGCclp = 0;
          this.KImhEM = 0;
          this.oHICAN([]);
          this.gaKJIa();
          this.CaPjfF = null;
          this.ijmngN.pfobLM();
        } else if (Kllakj == "r") {
          this.Ohijha = false;
          this.oHNLbe = 0;
          this.EGCclp = 0;
          this.KImhEM = 0;
          this.oHICAN([]);
          this.gaKJIa();
          this.CaPjfF = null;
          this.ijmngN.KafPBn();
        } else if (Kllakj == "p") {
          var idfjHK = oAhABg(FcjjJm[1]);
          if (
            (this.lPdHHA.dDDJLB != idfjHK && idfjHK > 0) ||
            !this.lPdHHA.EAflFm
          ) {
            this.GjiMbE = oAhABg(FcjjJm[3]);
            this.KHmIfA(oAhABg(FcjjJm[2]), FcjjJm[4].split(":"));
          }
        } else {
          $warn("GC " + Kllakj);
        }
      }
      if (this.NcJIdp.length > 0 && !bNpjMK) {
        this.ijmngN.aCCjfA();
        var gPbjeM = this.NcJIdp.shift();
        var cGLImA = heeNHP.NgJdlP(ALDPFj() - gPbjeM[0]);
        FcjjJm = gPbjeM[1];
        var ninAcH = FcjjJm.length;
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          GApkjE = FcjjJm[nJikla].split("#");
          Kllakj = GApkjE[0];
          if (Kllakj == "p") {
            if (GApkjE.length < 4) {
              this.ijmngN.CLhPIl(
                GApkjE[1],
                gfKdjj("computer_player"),
                GApkjE[3]
              );
            } else {
              this.ijmngN.CLhPIl(GApkjE[1], GApkjE[2], GApkjE[3]);
            }
          } else if (Kllakj == "s") {
          } else if (Kllakj == "i") {
            this.ijmngN.GlccOi(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "h") {
            this.Fmfanl(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "j") {
            this.jKGJcp(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "c") {
            this.ijmngN.FhKkhP(GApkjE[1]);
          } else if (Kllakj == "t") {
            this.ijmngN.BbIcIh(oAhABg(GApkjE[1]) + cGLImA, GApkjE[2]);
          } else if (Kllakj == "e") {
            this.ijmngN.ANjAml(GApkjE[1]);
          } else if (Kllakj == "r") {
            this.ijmngN.CPiinh(GApkjE[1], oAhABg(GApkjE[2]) + cGLImA);
          } else if (Kllakj == "w") {
            this.ijmngN.pHlLKH();
            if (this.jJPDNf) {
              this.daNEef = GApkjE;
            } else {
              this.Ohijha = false;
              this.oHNLbe = 0;
              this.EGCclp = 0;
              this.KImhEM = 0;
              this.oHICAN([]);
              this.gaKJIa();
              this.CaPjfF = null;
              this.ijmngN.pHlLKH();
              this.ijmngN.NblciE(
                GApkjE[1],
                GApkjE[2],
                GApkjE[3],
                GApkjE[4],
                GApkjE[5],
                GApkjE[6]
              );
              this.daNEef = null;
            }
          } else if (Kllakj == "v") {
            this.ijmngN.pMgBMk();
            var pIilIH = GApkjE.length;
            for (var PCFaJc = 1; PCFaJc < pIilIH; PCFaJc++) {
              this.ijmngN.hKadpl(GApkjE[PCFaJc]);
            }
          } else if (Kllakj == "l") {
            this.ijmngN.hKadpl(GApkjE[1]);
          } else {
            $warn("IC " + Kllakj);
          }
        }
      }
      if (this.DglBmN.length > 0 || this.NcJIdp.length > 0) {
        this.EGKkOn();
      } else if (this.lIKDEP) {
        this.CnbiBg();
      }
    };
    kJfBld.prototype.hcLEeN = function (JcLoBg) {
      if (!this.ohiNnb) {
        return;
      }
      if (!JcLoBg) {
        return;
      }
      if (JcLoBg.hasOwnProperty("gcn")) {
        this.ijmngN.lBhdbN();
      }
      if (JcLoBg.hasOwnProperty("cpi")) {
        this.lPdHHA.dDDJLB = oAhABg(JcLoBg["cpi"]);
      }
      var jCACbJ = false;
      if (JcLoBg.hasOwnProperty("gv")) {
        jCACbJ = true;
        var NGhcmm = String(JcLoBg.gv).split("|");
        var ninAcH = NGhcmm.length;
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          var fefOLc = NGhcmm[nJikla].split("#");
          var DmMGAD = fefOLc[0];
          this.DglBmN.push(fefOLc);
        }
      }
      if (JcLoBg.hasOwnProperty("gs")) {
        jCACbJ = true;
        this.NcJIdp.push([ALDPFj(), String(JcLoBg.gs).split("|")]);
      }
      if (!this.BnkPBg && jCACbJ) {
        this.EGKkOn();
      }
    };
    kJfBld.prototype.lKNOFa = function (fIjFDB) {
      if (!this.ohiNnb) {
        return;
      }
      this.fAilnP();
    };
    kJfBld.prototype.oCJPLH = function (AbPlpB, jkLFeJ) {
      AbPlpB = oAhABg(AbPlpB);
      jkLFeJ = oAhABg(jkLFeJ);
      this.IaHPie = ocPfib();
      this.PdMbho.OomKnE();
      this.MFKnAF = {};
      var NFNlob = this.EIefAg.dBcMeJ;
      NFNlob.table_default.style.backgroundImage =
        'url("' +
        BLAZE.nHKIje.mbcAmA("bitmap", "chess_default_table").src +
        '")';
      NFNlob.table_overlay.classList.remove("transition");
      NFNlob.table_overlay.style.backgroundImage = "none";
      if (AbPlpB > 0) {
        NFNlob.table_overlay.style.display = "block";
        NFNlob.table_overlay.style.opacity = "0";
        var gPbjeM = "chb" + AbPlpB;
        BLAZE.nHKIje.LepiMi(
          gPbjeM,
          lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
          1,
          this.iaDHdE,
          this
        );
      } else {
        NFNlob.table_overlay.style.display = "none";
      }
    };
    kJfBld.prototype.ocNCAH = function () {
      return ocPfib() - this.IaHPie < 1000;
    };
    kJfBld.prototype.iaDHdE = function (mgKkDL, OIBhDm, NKIIgg) {
      if (!NKIIgg || !OIBhDm) {
        return;
      }
      if (!NKIIgg.EIefAg) {
        return;
      }
      var EEfbOm = NKIIgg.EIefAg.dBcMeJ.table_overlay;
      EEfbOm.style.backgroundImage = 'url("' + OIBhDm.src + '")';
      if (!NKIIgg.ocNCAH()) {
        EEfbOm.classList.add("transition");
      }
      EEfbOm.style.opacity = "1";
    };
    kJfBld.prototype.ADnFKL = function (feNOmn) {
      this.CaPjfF = null;
      this.elJmMm = "";
      if (!this.ohiNnb) {
        return;
      }
      if (!this.EIefAg) {
        return;
      }
      var NFNlob = this.EIefAg.dBcMeJ;
      if (this.LNlOgo != this.lPdHHA.dDDJLB) {
        this.LNlOgo = this.lPdHHA.dDDJLB;
        if (this.LNlOgo == 1 || this.LNlOgo == 2) {
          NFNlob.table_base.classList.remove("FlipBoard");
          NFNlob.table_numbers.style.backgroundImage =
            'url("' +
            BLAZE.nHKIje.mbcAmA("bitmap", "chess_numbers_" + this.LNlOgo).src +
            '")';
        } else {
          NFNlob.table_base.classList.add("FlipBoard");
          NFNlob.table_numbers.style.backgroundImage =
            'url("' +
            BLAZE.nHKIje.mbcAmA("bitmap", "chess_numbers_0").src +
            '")';
        }
        var GApkjE;
        var BEoghm = NFNlob.table_sectors;
        for (var nJikla = 0; nJikla < 64; nJikla++) {
          var kiPjJb = NFNlob["s_" + nJikla];
          var jDnaip = nJikla;
          var Cloped = jDnaip % 8;
          var pcjJEl = (jDnaip - Cloped) / 8;
          if (this.LNlOgo == 1) {
            GApkjE = pcjJEl;
            pcjJEl = Cloped;
            Cloped = 7 - GApkjE;
          } else if (this.LNlOgo == 2) {
            GApkjE = pcjJEl;
            pcjJEl = 7 - Cloped;
            Cloped = GApkjE;
          }
          jDnaip = pcjJEl * 8 + Cloped;
          NFNlob["a_" + jDnaip] = kiPjJb;
        }
      }
      this.oHICAN([]);
      this.gaKJIa();
      this.jJPDNf = false;
      this.NIkDbl = [];
      this.ODEdfI = {};
      var NGhcmm = feNOmn.split(";");
      var ninAcH = NGhcmm.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        var BanHbo = NGhcmm[nJikla].split(":");
        if (BanHbo.length == 2) {
          this.ODEdfI["_" + oAhABg(BanHbo[0])] = [oAhABg(BanHbo[1]), 0];
        } else if (BanHbo.length == 3) {
          this.ODEdfI["_" + oAhABg(BanHbo[0])] = [
            oAhABg(BanHbo[1]),
            oAhABg(BanHbo[2]),
          ];
        }
      }
      this.hkLImp();
      this.IkeDfA(1);
      this.IkeDfA(2);
    };
    kJfBld.prototype.gOkeLA = function () {
      this.ODEdfI = {};
      this.hkLImp();
    };
    kJfBld.prototype.hkLImp = function () {
      if (!this.ohiNnb) {
        return;
      }
      if (!this.EIefAg) {
        return;
      }
      if (this.LNlOgo < 0) {
        return;
      }
      var HAofFM;
      for (HAofFM in this.ODEdfI) {
        var bhffAe = oAhABg(HAofFM.substring(1));
        var cmgfcO = bhffAe < 21;
        var EEfbOm = this.MFKnAF[HAofFM];
        if (!EEfbOm) {
          if (cmgfcO) {
            EEfbOm = new BLAZE.ePAIpG(this.elpkdd, 1, 4, cIgPbl);
            EEfbOm.nPEmmC = new BLAZE.ePAIpG(this.elpkdd, 1, 4, cIgPbl);
          } else {
            EEfbOm = new BLAZE.ePAIpG(this.llPbji, 1, 4, cIgPbl);
            EEfbOm.nPEmmC = new BLAZE.ePAIpG(this.elpkdd, 1, 4, cIgPbl);
          }
          EEfbOm.hMCCCH(-1, EEfbOm.nPEmmC);
          this.PdMbho.hMCCCH(-1, EEfbOm);
          this.MFKnAF[HAofFM] = EEfbOm;
        }
        if (!cmgfcO) {
          if (this.ODEdfI[HAofFM][1] > 0) {
            EEfbOm.aciHoI(3);
            EEfbOm.nPEmmC.aciHoI(5);
          } else {
            EEfbOm.aciHoI(1);
            EEfbOm.nPEmmC.aciHoI(4);
          }
        } else {
          if (this.ODEdfI[HAofFM][1] > 0) {
            EEfbOm.aciHoI(2);
            EEfbOm.nPEmmC.aciHoI(5);
          } else {
            EEfbOm.aciHoI(0);
            EEfbOm.nPEmmC.aciHoI(4);
          }
        }
        gAmDeK.ILFDaD(
          this.ndfiBh(this.ODEdfI[HAofFM][0]),
          this.MFKnAF[HAofFM].nFBFbe
        );
      }
      var cbOAAi = Object.keys(this.MFKnAF);
      var ninAcH = cbOAAi.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        HAofFM = cbOAAi[nJikla];
        if (!this.ODEdfI.hasOwnProperty(HAofFM)) {
          this.PdMbho.IFaBEF(this.MFKnAF[HAofFM]);
          delete this.MFKnAF[HAofFM];
        }
      }
      this.PdMbho.BeDIGn();
    };
    kJfBld.prototype.aibGfc = function (nFBFbe) {
      var GApkjE;
      var Cloped = Math.round(Math.floor(nFBFbe[0] / PanInM));
      var pcjJEl = Math.round(Math.floor(nFBFbe[1] / PanInM));
      if (this.LNlOgo == 1) {
        GApkjE = pcjJEl;
        pcjJEl = Cloped;
        Cloped = 7 - GApkjE;
      } else if (this.LNlOgo == 2) {
        GApkjE = pcjJEl;
        pcjJEl = 7 - Cloped;
        Cloped = GApkjE;
      }
      return [Cloped, pcjJEl];
    };
    kJfBld.prototype.lfaJEc = function (nFBFbe) {
      var GApkjE;
      var Cloped = Math.round(Math.floor(nFBFbe[0] / PanInM));
      var pcjJEl = Math.round(Math.floor(nFBFbe[1] / PanInM));
      if (this.LNlOgo == 1) {
        GApkjE = pcjJEl;
        pcjJEl = Cloped;
        Cloped = 7 - GApkjE;
      } else if (this.LNlOgo == 2) {
        GApkjE = pcjJEl;
        pcjJEl = 7 - Cloped;
        Cloped = GApkjE;
      }
      return Math.round(Cloped + pcjJEl * 8);
    };
    kJfBld.prototype.CbOJOm = function (jDnaip) {
      var Cloped = jDnaip % 8;
      var pcjJEl = (jDnaip - Cloped) / 8;
      return [Cloped, pcjJEl];
    };
    kJfBld.prototype.ndfiBh = function (jDnaip) {
      var GApkjE;
      var Cloped = jDnaip % 8;
      var pcjJEl = (jDnaip - Cloped) / 8;
      if (this.LNlOgo == 1) {
        GApkjE = pcjJEl;
        pcjJEl = 7 - Cloped;
        Cloped = GApkjE;
      } else if (this.LNlOgo == 2) {
        GApkjE = pcjJEl;
        pcjJEl = Cloped;
        Cloped = 7 - GApkjE;
      }
      return [Cloped * PanInM + JDJJKH[0], pcjJEl * PanInM + JDJJKH[1]];
    };
    kJfBld.prototype.nljnOJ = function (jDnaip) {
      var Cloped = jDnaip % 8;
      var pcjJEl = (jDnaip - Cloped) / 8;
      if (pcjJEl % 2 == 0) {
        return Cloped % 2 != 0;
      } else {
        return Cloped % 2 == 0;
      }
    };
    kJfBld.prototype.Fmfanl = function (MENKgg, FcjjJm) {
      if (!this.EIefAg) {
        return;
      }
      if (MENKgg != 1 && MENKgg != 2) {
        return;
      }
      this.eKgBEN["_" + MENKgg] = [];
      this.jKGJcp(MENKgg, FcjjJm);
    };
    kJfBld.prototype.jKGJcp = function (MENKgg, FcjjJm) {
      if (!this.EIefAg) {
        return;
      }
      if (MENKgg != 1 && MENKgg != 2) {
        return;
      }
      var LbKKlK = this.eKgBEN["_" + MENKgg];
      var BanHbo = FcjjJm.split(":");
      var ninAcH = BanHbo.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        var GApkjE = BanHbo[nJikla].split(".");
        if (GApkjE.length == 2) {
          LbKKlK.push([oAhABg(GApkjE[0]), oAhABg(GApkjE[1])]);
        }
      }
      this.IkeDfA(MENKgg);
    };
    kJfBld.prototype.IkeDfA = function (MENKgg) {
      if (!this.EIefAg) {
        return;
      }
      if (!this.elpkdd || !this.llPbji) {
        return;
      }
      var HGpCdd;
      var BmeGLL = "";
      if (this.LNlOgo == 1) {
        if (MENKgg == 1) {
          BmeGLL = 'url("' + this.llPbji.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_1"];
        } else if (MENKgg == 2) {
          BmeGLL = 'url("' + this.elpkdd.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_2"];
        } else {
          return;
        }
      } else if (this.LNlOgo == 2) {
        if (MENKgg == 1) {
          BmeGLL = 'url("' + this.llPbji.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_2"];
        } else if (MENKgg == 2) {
          BmeGLL = 'url("' + this.elpkdd.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_1"];
        } else {
          return;
        }
      } else {
        if (MENKgg == 1) {
          BmeGLL = 'url("' + this.llPbji.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_2"];
        } else if (MENKgg == 2) {
          BmeGLL = 'url("' + this.elpkdd.src + '")';
          HGpCdd = this.EIefAg.dBcMeJ["stack_1"];
        } else {
          return;
        }
      }
      var LbKKlK = this.eKgBEN["_" + MENKgg];
      var EEfbOm,
        ninAcH = LbKKlK.length;
      for (var nJikla = 0; nJikla < ApolOp; nJikla++) {
        var lgLFjN = "S" + nJikla;
        var CmaMod = "E" + nJikla;
        if (nJikla >= ninAcH) {
          EEfbOm = HGpCdd[CmaMod];
          if (EEfbOm) {
            if (EEfbOm.parentNode) {
              EEfbOm.parentNode.removeChild(EEfbOm);
            }
            EEfbOm = null;
            delete HGpCdd[CmaMod];
          }
          EEfbOm = HGpCdd[lgLFjN];
          if (EEfbOm) {
            if (EEfbOm.parentNode) {
              EEfbOm.parentNode.removeChild(EEfbOm);
            }
            EEfbOm = null;
            delete HGpCdd[lgLFjN];
          }
        } else {
          var GApkjE = LbKKlK[nJikla];
          var cmgfcO = GApkjE[0] < 21;
          var HFLFgb = GApkjE[1] > 0;
          EEfbOm = HGpCdd[lgLFjN];
          if (!EEfbOm) {
            EEfbOm = document.createElement("div");
            HGpCdd[lgLFjN] = EEfbOm;
            HGpCdd.appendChild(EEfbOm);
          }
          EEfbOm.style.backgroundImage = BmeGLL;
          if (HFLFgb) {
            EEfbOm.className = "CheckerShadow Frame5";
          } else {
            EEfbOm.className = "CheckerShadow Frame4";
          }
          EEfbOm = HGpCdd[CmaMod];
          if (!EEfbOm) {
            EEfbOm = document.createElement("div");
            HGpCdd[CmaMod] = EEfbOm;
            HGpCdd[lgLFjN].appendChild(EEfbOm);
          }
          EEfbOm.style.backgroundImage = BmeGLL;
          if (cmgfcO) {
            if (HFLFgb) {
              EEfbOm.className = "CheckerFigure Frame2";
            } else {
              EEfbOm.className = "CheckerFigure Frame0";
            }
          } else {
            if (HFLFgb) {
              EEfbOm.className = "CheckerFigure Frame3";
            } else {
              EEfbOm.className = "CheckerFigure Frame1";
            }
          }
        }
      }
    };
    kJfBld.prototype.BmDFeM = function (jDnaip) {
      if (!this.EIefAg || !this.MOELIO) {
        return;
      }
      this.gaKJIa();
      if (this.MOELIO.parentNode) {
        this.MOELIO.parentNode.removeChild(this.MOELIO);
      }
      this.MOELIO.classList.remove("Transition");
      this.MOELIO.style.opacity = 1;
      var NFNlob = this.EIefAg.dBcMeJ;
      var BNlnCD = "a_" + jDnaip;
      if (!NFNlob[BNlnCD]) {
        return;
      }
      NFNlob[BNlnCD].appendChild(this.MOELIO);
    };
    kJfBld.prototype.gaKJIa = function () {
      if (this.MOELIO) {
        this.MOELIO.classList.add("Transition");
        this.MOELIO.style.opacity = 0;
      }
    };
    kJfBld.prototype.GEPIeI = function (jDnaip) {
      if (!this.EIefAg || !this.JCacHo) {
        return;
      }
      if (this.JCacHo.parentNode) {
        this.JCacHo.parentNode.removeChild(this.JCacHo);
      }
      var NFNlob = this.EIefAg.dBcMeJ;
      var BNlnCD = "a_" + jDnaip;
      if (!NFNlob[BNlnCD]) {
        return;
      }
      NFNlob[BNlnCD].appendChild(this.JCacHo);
      this.JCacHo.style.display = "none";
      this.JCacHo.classList.remove("Animation");
      this.JCacHo.style.display = "";
      this.JCacHo.classList.add("Animation");
    };
    kJfBld.prototype.oHICAN = function (BEoghm) {
      if (!this.EIefAg) {
        return;
      }
      var NFNlob = this.EIefAg.dBcMeJ;
      var KiEicb = {};
      var nJikla,
        ninAcH = BEoghm.length;
      for (nJikla = 0; nJikla < ninAcH; nJikla++) {
        KiEicb["_" + BEoghm[nJikla]] = true;
      }
      for (nJikla = 0; nJikla < 64; nJikla++) {
        var kiPjJb = NFNlob["a_" + nJikla];
        if (kiPjJb) {
          if (KiEicb["_" + nJikla]) {
            if (this.nljnOJ(nJikla)) {
              kiPjJb.classList.add("CH_White");
            } else {
              kiPjJb.classList.add("CH_Black");
            }
          } else {
            kiPjJb.classList.remove("CH_Black");
            kiPjJb.classList.remove("CH_White");
          }
        }
      }
    };
    kJfBld.prototype.KHmIfA = function (bhffAe, CFhblL) {
      if (!CFhblL) {
        return;
      }
      if (!this.ohiNnb) {
        return;
      }
      var MhHdkH = [];
      var ninAcH = CFhblL.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        MhHdkH.push([bhffAe, oAhABg(CFhblL[nJikla])]);
      }
      this.jnjPPP(MhHdkH);
    };
    kJfBld.prototype.jnjPPP = function (MhHdkH) {
      if (!MhHdkH) {
        return;
      }
      if (!this.ohiNnb) {
        return;
      }
      if (this.jJPDNf) {
        var ninAcH = this.NIkDbl.length;
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          var AaOFfK = this.NIkDbl[nJikla];
          var HAofFM = "_" + AaOFfK[0];
          var iIpIKo = oAhABg(AaOFfK[1]) % 64;
          if (this.MFKnAF[HAofFM]) {
            this.MFKnAF[HAofFM].nFBFbe = this.ndfiBh(iIpIKo);
          }
        }
        this.PdMbho.BeDIGn();
      }
      this.jJPDNf = true;
      this.NIkDbl = MhHdkH;
      this.mBfdJB();
    };
    kJfBld.prototype.mBfdJB = function () {
      if (!this.ohiNnb || !this.jJPDNf) {
        return;
      }
      var CfMGEe;
      if (this.cgeiLp != "") {
        if (this.MFKnAF[this.cgeiLp]) {
          this.PdMbho.IFaBEF(this.MFKnAF[this.cgeiLp]);
          delete this.MFKnAF[this.cgeiLp];
        }
        this.cgeiLp = "";
      }
      if (this.IeMJGm > 20) {
        CfMGEe = this.jBgBcl;
      } else {
        CfMGEe = this.ibcgIe;
      }
      if (this.IeMJGm > 0) {
        if (this.HHiGNa) {
          HEOfca.lBHHDa(CfMGEe + "hit", 1, false, 0, true);
        }
      }
      if (this.NIkDbl.length < 1) {
        if (this.IeMJGm >= 0 && this.eHENDa && !this.Ohijha) {
          var pNApDl = "_" + this.IeMJGm;
          if (this.ODEdfI[pNApDl]) {
            if (this.ODEdfI[pNApDl][1] == 0) {
              var hNfknl = this.CbOJOm(this.CoajNh);
              var ibolmo = -1;
              if (this.IeMJGm < 21) {
                if (hNfknl[0] == 7) {
                  ibolmo = 2;
                }
              } else {
                if (hNfknl[0] == 0) {
                  ibolmo = 3;
                }
              }
              if (ibolmo >= 0) {
                HEOfca.lBHHDa(CfMGEe + "crowned", 1, false, 0, true);
                this.eHENDa.aciHoI(ibolmo);
              }
            }
          }
        }
        if (this.eHENDa) {
          this.eHENDa.nPEmmC.olcjkN = true;
          this.eHENDa = null;
        }
        this.IeMJGm = -1;
        this.jJPDNf = false;
        if (this.elJmMm != "") {
          this.ADnFKL(this.elJmMm);
        } else {
          this.PdMbho.BeDIGn();
        }
        if (this.Ohijha) {
          if (this.nMMmiP) {
            if (this.JfanJB) {
              this.oHICAN(this.nMMmiP.BEoghm);
            }
          }
        }
        if (this.daNEef) {
          this.Ohijha = false;
          this.oHNLbe = 0;
          this.EGCclp = 0;
          this.KImhEM = 0;
          this.oHICAN([]);
          this.gaKJIa();
          this.CaPjfF = null;
          this.ijmngN.pHlLKH();
          this.ijmngN.NblciE(
            this.daNEef[1],
            this.daNEef[2],
            this.daNEef[3],
            this.daNEef[4],
            this.daNEef[5],
            this.daNEef[6]
          );
          this.daNEef = null;
        }
        if (this.lIKDEP) {
          this.CnbiBg();
        }
      } else {
        var AaOFfK = this.NIkDbl.shift();
        var HAofFM = "_" + AaOFfK[0];
        var iIpIKo = oAhABg(AaOFfK[1]) % 64;
        if (this.MFKnAF[HAofFM]) {
          if (!this.Ohijha) {
            this.GEPIeI(iIpIKo);
          }
          this.jJPDNf = true;
          this.IeMJGm = AaOFfK[0];
          this.cgeiLp = "";
          this.eHENDa = this.MFKnAF[HAofFM];
          this.CoajNh = iIpIKo;
          this.iPkgOG = this.ndfiBh(iIpIKo);
          this.LljCGc = gAmDeK.hhcCkm(this.eHENDa.nFBFbe);
          this.bEHIHi = gAmDeK.kbKEhc(this.iPkgOG, this.LljCGc);
          this.HanOMI = gAmDeK.LPNBNn(this.bEHIHi);
          this.gNEdBe = this.HanOMI * 0.5;
          this.ABNNLb = 1 / this.gNEdBe / this.gNEdBe;
          this.cpcCEI = 0;
          this.aLOcBM = 0;
          this.HHiGNa = this.HanOMI / PanInM > 1.9;
          if (this.HHiGNa) {
            this.hOciMp = iocbhP;
          } else {
            this.hOciMp = BKNiJh;
          }
          if (this.HHiGNa) {
            var nJikla, NjelFn;
            var iPeNAB = {};
            for (var cHEhJc in this.ODEdfI) {
              iPeNAB["_" + this.ODEdfI[cHEhJc][0]] = cHEhJc;
            }
            var ejjNlk = "";
            var lACBMH = this.aibGfc(this.LljCGc);
            var fCJBcf = this.CbOJOm(iIpIKo);
            if (fCJBcf[0] > lACBMH[0]) {
              if (fCJBcf[1] > lACBMH[1]) {
                for (nJikla = 0; nJikla < 7; nJikla++) {
                  lACBMH[0] = lACBMH[0] + 1;
                  lACBMH[1] = lACBMH[1] + 1;
                  if (lACBMH[0] >= fCJBcf[0] && lACBMH[1] >= fCJBcf[1]) {
                    break;
                  }
                  NjelFn = "_" + Math.round(lACBMH[0] + lACBMH[1] * 8);
                  if (iPeNAB[NjelFn]) {
                    this.cgeiLp = iPeNAB[NjelFn];
                    break;
                  }
                }
              } else {
                for (nJikla = 0; nJikla < 7; nJikla++) {
                  lACBMH[0] = lACBMH[0] + 1;
                  lACBMH[1] = lACBMH[1] - 1;
                  if (lACBMH[0] >= fCJBcf[0] && lACBMH[1] <= fCJBcf[1]) {
                    break;
                  }
                  NjelFn = "_" + Math.round(lACBMH[0] + lACBMH[1] * 8);
                  if (iPeNAB[NjelFn]) {
                    this.cgeiLp = iPeNAB[NjelFn];
                    break;
                  }
                }
              }
            } else {
              if (fCJBcf[1] > lACBMH[1]) {
                for (nJikla = 0; nJikla < 7; nJikla++) {
                  lACBMH[0] = lACBMH[0] - 1;
                  lACBMH[1] = lACBMH[1] + 1;
                  if (lACBMH[0] <= fCJBcf[0] && lACBMH[1] >= fCJBcf[1]) {
                    break;
                  }
                  NjelFn = "_" + Math.round(lACBMH[0] + lACBMH[1] * 8);
                  if (iPeNAB[NjelFn]) {
                    this.cgeiLp = iPeNAB[NjelFn];
                    break;
                  }
                }
              } else {
                for (nJikla = 0; nJikla < 7; nJikla++) {
                  lACBMH[0] = lACBMH[0] - 1;
                  lACBMH[1] = lACBMH[1] - 1;
                  if (lACBMH[0] <= fCJBcf[0] && lACBMH[1] <= fCJBcf[1]) {
                    break;
                  }
                  NjelFn = "_" + Math.round(lACBMH[0] + lACBMH[1] * 8);
                  if (iPeNAB[NjelFn]) {
                    this.cgeiLp = iPeNAB[NjelFn];
                    break;
                  }
                }
              }
            }
            if (this.cgeiLp == "") {
              this.HHiGNa = false;
            }
          }
          if (this.IeMJGm > 20) {
            CfMGEe = this.jBgBcl;
          } else {
            CfMGEe = this.ibcgIe;
          }
          this.PdMbho.innjPe(this.eHENDa);
          if (this.HHiGNa) {
            this.eHENDa.nPEmmC.olcjkN = false;
          } else {
            this.eHENDa.nPEmmC.olcjkN = true;
            HEOfca.lBHHDa(CfMGEe + "move", 1, false, 0, true);
          }
          if (this.cgeiLp != "") {
            var oAaADp = oAhABg(this.cgeiLp.substring(1));
            if (oAaADp < 21) {
              CfMGEe = this.jBgBcl;
            } else {
              CfMGEe = this.ibcgIe;
            }
            HEOfca.lBHHDa(CfMGEe + "kill", 1, false, 0, true);
          }
        } else {
          this.mBfdJB();
        }
      }
    };
    kJfBld.prototype.fAilnP = function () {
      if (!this.jJPDNf) {
        return;
      }
      if (this.eHENDa) {
        this.cpcCEI = this.cpcCEI + BLAZE.nJcHkO.PjCOjo;
        if (this.cpcCEI < this.hOciMp) {
          this.aLOcBM = (this.cpcCEI / this.hOciMp) * this.HanOMI;
          var iFgaFL = gAmDeK.GLomjE(this.bEHIHi, this.aLOcBM / this.HanOMI);
          gAmDeK.dobFPC(iFgaFL, this.LljCGc);
          if (this.HHiGNa) {
            var LAiAaC = Math.abs(this.aLOcBM - this.gNEdBe);
            LAiAaC = fNGPHB - fNGPHB * LAiAaC * LAiAaC * this.ABNNLb;
            iFgaFL[1] = iFgaFL[1] - LAiAaC;
          }
          this.eHENDa.nFBFbe = iFgaFL;
          this.PdMbho.BeDIGn();
          return;
        }
        this.eHENDa.nFBFbe = this.iPkgOG;
      }
      this.mBfdJB();
      this.PdMbho.BeDIGn();
    };
    kJfBld.prototype.bpFcAb = function (kOcBHb) {
      var EEfbOm = kOcBHb.target;
      if (kOcBHb.type == "touchend") {
        if (kOcBHb.changedTouches.length < 1) {
          return;
        }
        var mbCOgG = kOcBHb.changedTouches[0];
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
        EEfbOm = document.elementFromPoint(mbCOgG.clientX, mbCOgG.clientY);
      } else if (kOcBHb.type == "touchstart") {
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
      }
      if (!EEfbOm) {
        return;
      }
      if (!EEfbOm.parentNode) {
        return;
      }
      if (!EEfbOm.parentNode.liadmE) {
        return;
      }
      EEfbOm.parentNode.liadmE.HpEKld(kOcBHb.type, EEfbOm.jDnaip);
    };
    kJfBld.prototype.HpEKld = function (MPFgaL, jDnaip) {
      if (this.lIKDEP) {
        this.ecPihA();
        return;
      }
      if (
        !this.ohiNnb ||
        !this.lPdHHA.EAflFm ||
        this.jJPDNf ||
        this.oHNLbe < 1
      ) {
        return;
      }
      jDnaip = oAhABg(jDnaip);
      var GApkjE, CfMGEe;
      var Cloped = jDnaip % 8;
      var pcjJEl = (jDnaip - Cloped) / 8;
      if (this.LNlOgo == 1) {
        GApkjE = pcjJEl;
        pcjJEl = Cloped;
        Cloped = 7 - GApkjE;
      } else if (this.LNlOgo == 2) {
        GApkjE = pcjJEl;
        pcjJEl = 7 - Cloped;
        Cloped = GApkjE;
      }
      jDnaip = pcjJEl * 8 + Cloped;
      if (this.nljnOJ(jDnaip)) {
        return;
      }
      var bhffAe = 0;
      for (var HAofFM in this.ODEdfI) {
        if (this.ODEdfI[HAofFM][0] == jDnaip) {
          bhffAe = oAhABg(HAofFM.substring(1));
          break;
        }
      }
      this.lBbKEH(this.oHNLbe, false);
      if (this.EGCclp == 0) {
        if (MPFgaL == "mousedown" || MPFgaL == "touchstart") {
          if (bhffAe > 0) {
            if (!this.nCIeej) {
              if (!BLAZE.nHKIje.fKjIAA()) {
                this.ohiNnb = false;
                BLAZE.global.gs.cqi();
                return;
              }
              this.nCIeej = true;
            }
            if (this.oHNLbe == 1) {
              if (bhffAe > 20) {
                return;
              }
              CfMGEe = this.ibcgIe;
            } else if (this.oHNLbe == 2) {
              if (bhffAe < 21) {
                return;
              }
              CfMGEe = this.jBgBcl;
            } else {
              return;
            }
            HEOfca.lBHHDa(CfMGEe + "click", 1, false, 0, true);
            this.AmMkPL = [];
            this.EGCclp = bhffAe;
            this.KImhEM = jDnaip;
            this.BmDFeM(jDnaip);
            this.nMMmiP = this.ceMhGm(this.EGCclp);
            if (this.JfanJB) {
              this.oHICAN(this.nMMmiP.BEoghm);
            }
          }
        }
      } else {
        if (MPFgaL == "mousedown" || MPFgaL == "touchstart") {
          if (!this.Ohijha) {
            if (this.EGCclp == bhffAe || this.KImhEM == jDnaip) {
            } else {
              if (bhffAe > 0) {
                if (this.oHNLbe == 1) {
                  if (bhffAe > 20) {
                    return;
                  }
                  CfMGEe = this.ibcgIe;
                } else if (this.oHNLbe == 2) {
                  if (bhffAe < 21) {
                    return;
                  }
                  CfMGEe = this.jBgBcl;
                } else {
                  return;
                }
                this.AmMkPL = [];
                this.EGCclp = bhffAe;
                this.KImhEM = jDnaip;
                this.BmDFeM(jDnaip);
                this.nMMmiP = this.ceMhGm(this.EGCclp);
                if (this.JfanJB) {
                  this.oHICAN(this.nMMmiP.BEoghm);
                }
                HEOfca.lBHHDa(CfMGEe + "click", 1, false, 0, true);
              }
            }
          }
        } else if (MPFgaL == "mouseup" || MPFgaL == "touchend") {
          if (bhffAe == 0) {
            if (this.nMMmiP) {
              var FpFkPE = "_" + jDnaip;
              if (this.nMMmiP.hasOwnProperty(FpFkPE)) {
                this.AmMkPL.push(jDnaip);
                this.oHICAN([]);
                this.jnjPPP([[this.EGCclp, jDnaip]]);
                var kjNIIF = this.nMMmiP[FpFkPE];
                var hDCFED = false;
                if (kjNIIF > 0) {
                  kjNIIF = "_" + kjNIIF;
                  if (this.ODEdfI[kjNIIF]) {
                    delete this.ODEdfI[kjNIIF];
                  }
                } else {
                  hDCFED = true;
                }
                this.ODEdfI["_" + this.EGCclp][0] = jDnaip;
                if (!hDCFED) {
                  if (this.fHCfBo[1] == "amcheckers") {
                    if (this.ODEdfI["_" + this.EGCclp][1] == 0) {
                      var mEiHkk = this.CbOJOm(jDnaip);
                      if (this.oHNLbe == 1) {
                        hDCFED = mEiHkk[0] == 7;
                      } else {
                        hDCFED = mEiHkk[0] == 0;
                      }
                    }
                  }
                }
                if (!hDCFED) {
                  this.CaPjfF = null;
                  this.lBbKEH(this.oHNLbe, true);
                  this.nMMmiP = this.ceMhGm(this.EGCclp);
                  if (this.nMMmiP.BEoghm.length > 0 && this.nMMmiP.kjNIIF) {
                    this.Ohijha = true;
                    this.BmDFeM(jDnaip);
                    return;
                  }
                }
                this.nMMmiP = null;
                this.CaPjfF = null;
                this.oHNLbe = 0;
                this.gaKJIa();
                this.ijmngN.KPeAhF({
                  c: "move",
                  v: this.EGCclp + ":" + this.AmMkPL.join(":"),
                });
                this.AmMkPL = [];
                this.ijmngN.KafPBn();
              }
            }
          }
        }
      }
    };
    kJfBld.prototype.ceMhGm = function (bhffAe) {
      if (this.CaPjfF) {
        var HAofFM = "_" + bhffAe;
        if (this.CaPjfF[HAofFM]) {
          return this.CaPjfF[HAofFM];
        }
      }
      return {
        BEoghm: [],
        kjNIIF: false,
      };
    };
    kJfBld.prototype.lBbKEH = function (OLIGEF, pJmlnH) {
      if (this.CaPjfF) {
        return;
      }
      this.CaPjfF = {};
      var nJikla, ninAcH, HAofFM, bhffAe;
      var ebHmFe = [];
      var iPeNAB = {};
      for (HAofFM in this.ODEdfI) {
        bhffAe = oAhABg(HAofFM.substring(1));
        iPeNAB["_" + this.ODEdfI[HAofFM][0]] = bhffAe;
        if (OLIGEF == 1) {
          if (bhffAe < 21) {
            ebHmFe.push(bhffAe);
          }
        } else {
          if (bhffAe > 20) {
            ebHmFe.push(bhffAe);
          }
        }
      }
      var OHLapg = false;
      ninAcH = ebHmFe.length;
      for (nJikla = 0; nJikla < ninAcH; nJikla++) {
        bhffAe = ebHmFe[nJikla];
        HAofFM = "_" + bhffAe;
        this.CaPjfF[HAofFM] = this.bgEPKD(bhffAe, iPeNAB, pJmlnH);
        if (this.CaPjfF[HAofFM].kjNIIF) {
          OHLapg = true;
        }
      }
      if (OHLapg) {
        for (HAofFM in this.CaPjfF) {
          var AaOFfK = this.CaPjfF[HAofFM];
          if (!AaOFfK.kjNIIF) {
            if (AaOFfK.BEoghm.length > 0) {
              this.CaPjfF[HAofFM] = {
                BEoghm: [],
                kjNIIF: false,
              };
            }
          }
        }
      }
    };
    kJfBld.prototype.bgEPKD = function (bhffAe, iPeNAB, pJmlnH) {
      var nJikla,
        ninAcH,
        cHEhJc,
        NjelFn,
        AacHej,
        gEOlNE,
        PfhHDm,
        HAofFM,
        JFfKpC,
        LAiAaC,
        IDempn;
      var GjfdEI = this.fHCfBo[1];
      var MhHdkH = {
        BEoghm: [],
        kjNIIF: false,
      };
      HAofFM = "_" + bhffAe;
      if (!this.ODEdfI[HAofFM]) {
        return;
      }
      var InDjMI = this.ODEdfI[HAofFM][0];
      var lACBMH = this.CbOJOm(InDjMI);
      var HFLFgb = this.ODEdfI[HAofFM][1] > 0;
      var cmgfcO = bhffAe < 21;
      var PfMmeI, jgAeim;
      if (GjfdEI == "gzcheckers" || GjfdEI == "anticheckers") {
        if (HFLFgb) {
          this.AlDfHJ([-1, -1], cmgfcO, lACBMH, MhHdkH, iPeNAB, false);
          this.AlDfHJ([-1, 1], cmgfcO, lACBMH, MhHdkH, iPeNAB, false);
          this.AlDfHJ([1, -1], cmgfcO, lACBMH, MhHdkH, iPeNAB, false);
          this.AlDfHJ([1, 1], cmgfcO, lACBMH, MhHdkH, iPeNAB, false);
          if (MhHdkH.kjNIIF) {
            var kKnCJB = {
              BEoghm: [],
              kjNIIF: true,
            };
            for (cHEhJc in MhHdkH) {
              if (cHEhJc.substring(0, 1) == "_") {
                if (MhHdkH[cHEhJc] > 0) {
                  kKnCJB[cHEhJc] = MhHdkH[cHEhJc];
                  kKnCJB.BEoghm.push(oAhABg(cHEhJc.substring(1)));
                }
              }
            }
            MhHdkH = kKnCJB;
          }
        } else {
          PfMmeI = [
            [1, -1],
            [1, 1],
          ];
          jgAeim = [
            [2, -2, -7],
            [2, 2, 9],
            [-2, -2, -9],
            [-2, 2, 7],
          ];
          ninAcH = jgAeim.length;
          for (nJikla = 0; nJikla < ninAcH; nJikla++) {
            LAiAaC = jgAeim[nJikla];
            if (cmgfcO) {
              PfhHDm = InDjMI + LAiAaC[2];
            } else {
              gAmDeK.ilCGno(LAiAaC);
              PfhHDm = InDjMI - LAiAaC[2];
            }
            JFfKpC = gAmDeK.ADJoEM(lACBMH, LAiAaC);
            if (JFfKpC[0] < 0 || JFfKpC[0] > 7) {
              continue;
            }
            if (JFfKpC[1] < 0 || JFfKpC[1] > 7) {
              continue;
            }
            AacHej = JFfKpC[1] * 8 + JFfKpC[0];
            NjelFn = "_" + AacHej;
            gEOlNE = "_" + PfhHDm;
            if (!iPeNAB.hasOwnProperty(NjelFn)) {
              if (iPeNAB.hasOwnProperty(gEOlNE)) {
                cHEhJc = iPeNAB[gEOlNE];
                if (cmgfcO) {
                  if (cHEhJc < 21) {
                    continue;
                  }
                } else {
                  if (cHEhJc > 20) {
                    continue;
                  }
                }
                MhHdkH.kjNIIF = true;
                MhHdkH[NjelFn] = cHEhJc;
                MhHdkH.BEoghm.push(AacHej);
              }
            }
          }
          if (!MhHdkH.kjNIIF) {
            ninAcH = PfMmeI.length;
            for (nJikla = 0; nJikla < ninAcH; nJikla++) {
              LAiAaC = PfMmeI[nJikla];
              if (!cmgfcO) {
                gAmDeK.ilCGno(LAiAaC);
              }
              JFfKpC = gAmDeK.ADJoEM(lACBMH, LAiAaC);
              if (JFfKpC[0] < 0 || JFfKpC[0] > 7) {
                continue;
              }
              if (JFfKpC[1] < 0 || JFfKpC[1] > 7) {
                continue;
              }
              AacHej = JFfKpC[1] * 8 + JFfKpC[0];
              NjelFn = "_" + AacHej;
              if (!iPeNAB.hasOwnProperty(NjelFn)) {
                MhHdkH[NjelFn] = 0;
                MhHdkH.BEoghm.push(AacHej);
              }
            }
          }
        }
      } else if (GjfdEI == "amcheckers") {
        if (HFLFgb) {
          PfMmeI = [
            [1, -1],
            [1, 1],
            [-1, 1],
            [-1, -1],
          ];
          jgAeim = [
            [2, -2, -7],
            [2, 2, 9],
            [-2, -2, -9],
            [-2, 2, 7],
          ];
        } else {
          PfMmeI = [
            [1, -1],
            [1, 1],
          ];
          if (pJmlnH) {
            jgAeim = [
              [2, -2, -7],
              [2, 2, 9],
              [-2, -2, -9],
              [-2, 2, 7],
            ];
          } else {
            jgAeim = [
              [2, -2, -7],
              [2, 2, 9],
            ];
          }
        }
        ninAcH = jgAeim.length;
        for (nJikla = 0; nJikla < ninAcH; nJikla++) {
          LAiAaC = jgAeim[nJikla];
          if (cmgfcO) {
            PfhHDm = InDjMI + LAiAaC[2];
          } else {
            gAmDeK.ilCGno(LAiAaC);
            PfhHDm = InDjMI - LAiAaC[2];
          }
          JFfKpC = gAmDeK.ADJoEM(lACBMH, LAiAaC);
          if (JFfKpC[0] < 0 || JFfKpC[0] > 7) {
            continue;
          }
          if (JFfKpC[1] < 0 || JFfKpC[1] > 7) {
            continue;
          }
          AacHej = JFfKpC[1] * 8 + JFfKpC[0];
          NjelFn = "_" + AacHej;
          gEOlNE = "_" + PfhHDm;
          if (!iPeNAB.hasOwnProperty(NjelFn)) {
            if (iPeNAB.hasOwnProperty(gEOlNE)) {
              cHEhJc = iPeNAB[gEOlNE];
              if (cmgfcO) {
                if (cHEhJc < 21) {
                  continue;
                }
              } else {
                if (cHEhJc > 20) {
                  continue;
                }
              }
              MhHdkH.kjNIIF = true;
              MhHdkH[NjelFn] = cHEhJc;
              MhHdkH.BEoghm.push(AacHej);
            }
          }
        }
        if (!MhHdkH.kjNIIF) {
          ninAcH = PfMmeI.length;
          for (nJikla = 0; nJikla < ninAcH; nJikla++) {
            LAiAaC = PfMmeI[nJikla];
            if (!cmgfcO) {
              gAmDeK.ilCGno(LAiAaC);
            }
            JFfKpC = gAmDeK.ADJoEM(lACBMH, LAiAaC);
            if (JFfKpC[0] < 0 || JFfKpC[0] > 7) {
              continue;
            }
            if (JFfKpC[1] < 0 || JFfKpC[1] > 7) {
              continue;
            }
            AacHej = JFfKpC[1] * 8 + JFfKpC[0];
            NjelFn = "_" + AacHej;
            if (!iPeNAB.hasOwnProperty(NjelFn)) {
              MhHdkH[NjelFn] = 0;
              MhHdkH.BEoghm.push(AacHej);
            }
          }
        }
      }
      return MhHdkH;
    };
    kJfBld.prototype.AlDfHJ = function (
      LAiAaC,
      cmgfcO,
      lACBMH,
      MhHdkH,
      iPeNAB,
      EOjcDC
    ) {
      var IGLHfB = {};
      var IkaJIp = [];
      var IDempn = 0;
      var nJikla,
        ninAcH,
        cHEhJc,
        cbOAAi,
        AacHej,
        NjelFn,
        mEiHkk = gAmDeK.hhcCkm(lACBMH);
      for (nJikla = 0; nJikla < 7; nJikla++) {
        gAmDeK.dobFPC(mEiHkk, LAiAaC);
        if (mEiHkk[0] > 7 || mEiHkk[0] < 0) {
          break;
        }
        if (mEiHkk[1] > 7 || mEiHkk[1] < 0) {
          break;
        }
        AacHej = Math.round(mEiHkk[0] + mEiHkk[1] * 8);
        NjelFn = "_" + AacHej;
        if (iPeNAB.hasOwnProperty(NjelFn)) {
          if (IDempn <= 0) {
            IDempn = iPeNAB[NjelFn];
            if (cmgfcO) {
              if (IDempn < 21) {
                break;
              }
            } else {
              if (IDempn > 20) {
                break;
              }
            }
          } else {
            break;
          }
        } else {
          if (IDempn > 0) {
            MhHdkH.kjNIIF = true;
          }
          IGLHfB[NjelFn] = IDempn;
          IkaJIp.push(AacHej);
        }
      }
      if (!EOjcDC) {
        if (MhHdkH.kjNIIF) {
          var DNcMJA = null;
          IkaJIp = [];
          cbOAAi = Object.keys(IGLHfB);
          ninAcH = cbOAAi.length;
          for (nJikla = 0; nJikla < ninAcH; nJikla++) {
            cHEhJc = cbOAAi[nJikla];
            if (IGLHfB[cHEhJc] > 0) {
              AacHej = oAhABg(cHEhJc.substring(1));
              var JFfKpC = this.CbOJOm(AacHej);
              var kdOmjD = {
                BEoghm: [],
                kjNIIF: false,
              };
              if (LAiAaC[0] != 1 || LAiAaC[1] != 1) {
                this.AlDfHJ([-1, -1], cmgfcO, JFfKpC, kdOmjD, iPeNAB, true);
              }
              if (LAiAaC[0] != 1 || LAiAaC[1] != -1) {
                this.AlDfHJ([-1, 1], cmgfcO, JFfKpC, kdOmjD, iPeNAB, true);
              }
              if (LAiAaC[0] != -1 || LAiAaC[1] != 1) {
                this.AlDfHJ([1, -1], cmgfcO, JFfKpC, kdOmjD, iPeNAB, true);
              }
              if (LAiAaC[0] != -1 || LAiAaC[1] != -1) {
                this.AlDfHJ([1, 1], cmgfcO, JFfKpC, kdOmjD, iPeNAB, true);
              }
              if (kdOmjD.kjNIIF) {
                if (!DNcMJA) {
                  DNcMJA = {};
                }
                DNcMJA[cHEhJc] = true;
              }
              IkaJIp.push(AacHej);
            } else {
              delete IGLHfB[cHEhJc];
            }
          }
          if (DNcMJA) {
            IkaJIp = [];
            cbOAAi = Object.keys(IGLHfB);
            ninAcH = cbOAAi.length;
            for (nJikla = 0; nJikla < ninAcH; nJikla++) {
              cHEhJc = cbOAAi[nJikla];
              if (DNcMJA.hasOwnProperty(cHEhJc)) {
                IkaJIp.push(oAhABg(cHEhJc.substring(1)));
              } else {
                delete IGLHfB[cHEhJc];
              }
            }
          }
        }
      }
      for (cHEhJc in IGLHfB) {
        MhHdkH[cHEhJc] = IGLHfB[cHEhJc];
      }
      ninAcH = IkaJIp.length;
      for (nJikla = 0; nJikla < ninAcH; nJikla++) {
        MhHdkH.BEoghm.push(IkaJIp[nJikla]);
      }
    };
    return function () {
      return new lPdHHA(new kJfBld(arguments));
    };
  })();
  BLAZE.BPhngk = BPhngk;
  var jOOBfb = (function () {
    var lDkhIC = BLAZE.GetENV("PROJECT_CONTENT_URL");
    var FBGiBD = 10000;
    var JfBDae = Math.round(FBGiBD * 0.1);
    var NMibMk = 1 / FBGiBD;
    var AljCfe = 1.3;
    var AFGlNi = 2.7;
    var aPFMLJ = 0.7;
    var OgHHOa = [12, 10];
    var DLCmbG = OgHHOa[0] * OgHHOa[1];
    var IcoPad = heeNHP.CoanLA(1.5 * FBGiBD);
    var abeaME = 0.7;
    var aiPpkC = 6;
    var BBMOMl = (1 - abeaME) / aiPpkC;
    var KBMgbN = 1 / aiPpkC;
    var lEnGoJ = 10;
    var jApFgf = 160;
    var EDfDPf = 20;
    var JjCcIh = 1 * FBGiBD;
    var BhDbjp = 100;
    var HDfFId = 0.5;
    var kAGnlM = 1.2;
    var oAefPK = [160, 1140];
    var PPJLKm = 26;
    var bGLjeH = 220;
    var LcgkhB = 1.7;
    var ocIDFJ = 0.004;
    var LiMFfn = 0.1;
    var mhoHip = 200;
    var bLNkPp = 1.2;
    var GBiBjO = 2;
    var AjghmE = 5;
    var hgeDgn = {
      DNDhkK: ["pocket_1", "pocket_2", "pocket_3", "pocket_4"],
      knblMN: ["cue"],
      DapfOp: ["table_border"],
      iFBNbk: ["ball_s1", "ball_s2", "ball_s3", "ball_s4"],
      DbDNjJ: ["ball_m1", "ball_m2", "ball_m3", "ball_m4", "ball_m5"],
      mKNnaG: ["ball_f1", "ball_f2", "ball_f3", "ball_f4", "ball_f5"],
    };
    var MLDDBb = [
      ["10% 100%"],
      ["10% 0%"],
      ["20% 100%"],
      ["20% 0%"],
      ["30% 100%"],
      ["30% 0%"],
      ["40% 100%"],
      ["40% 0%"],
      ["50% 100%"],
      ["50% 0%"],
      ["60% 100%"],
      ["60% 0%"],
      ["70% 100%"],
      ["70% 0%"],
      ["80% 100%"],
      ["80% 0%"],
      ["90% 100%"],
      ["90% 0%"],
      ["100% 100%"],
      ["100% 0%"],
    ];
    var Jbelce = [];
    Jbelce[1] = [60.9, 0.032, true, MLDDBb];
    Jbelce[2] = [49.4, 0.04, true, MLDDBb];
    Jbelce[3] = [41.54, 0.048, true, MLDDBb];
    Jbelce[4] = [37.6, 0.04, true, MLDDBb];
    Jbelce[5] = [34.1, 0.035, true, MLDDBb];
    Jbelce[6] = [13.25, 0.04, true, MLDDBb];
    Jbelce[7] = [23.38, 0.03, true, MLDDBb];
    var cmbjGA = [1800, 1000];
    var NJkghD = [7, 4];
    var gbgEGp = [cmbjGA[0] * FBGiBD, cmbjGA[1] * FBGiBD];
    var PanInM = [
      Math.round(gbgEGp[0] / NJkghD[0]),
      Math.round(gbgEGp[1] / NJkghD[1]),
    ];
    var iddNhL = "billiards_ballset";
    var ABGeNN = [5, 3];
    var DIbFOl = [];
    DIbFOl[0] = {
      FIIKjN: 25,
      LdmPeG: [
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 4],
        [6, 5],
        [7, 6],
        [8, 7],
        [9, 8],
        [1, 9],
        [1, 10],
        [1, 11],
        [1, 12],
        [1, 13],
        [1, 14],
        [1, 15],
      ],
    };
    DIbFOl[1] = {
      FIIKjN: 25,
      LdmPeG: [
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 4],
        [6, 5],
        [7, 6],
        [8, 7],
        [9, 8],
        [1, 9],
        [1, 10],
        [1, 11],
        [1, 12],
        [1, 13],
        [1, 14],
        [1, 15],
      ],
    };
    DIbFOl[2] = {
      FIIKjN: 27,
      LdmPeG: [
        [14, 0],
        [1, 1],
        [1, 2],
        [1, 3],
        [1, 4],
        [1, 5],
        [1, 6],
        [1, 7],
        [1, 8],
        [1, 16],
        [1, 17],
        [1, 18],
        [1, 19],
        [1, 20],
        [1, 21],
        [1, 22],
      ],
    };
    DIbFOl[3] = {
      FIIKjN: 26,
      LdmPeG: [
        [1, 0],
        [14, -1],
        [10, -1],
      ],
    };
    DIbFOl[4] = {
      FIIKjN: 25,
      LdmPeG: [
        [1, 0],
        [2, 1],
        [3, 2],
        [4, 3],
        [5, 4],
        [6, 5],
        [7, 6],
        [8, 7],
        [9, 8],
        [1, 9],
      ],
    };
    DIbFOl[5] = {
      FIIKjN: 22,
      LdmPeG: [
        [1, 0],
        [2, -1],
        [7, -1],
        [6, -1],
        [3, -1],
        [13, -1],
        [9, -1],
        [12, -1],
        [11, -1],
        [10, -1],
      ],
    };
    DIbFOl[6] = {
      FIIKjN: 25,
      LdmPeG: [
        [1, 0],
        [10, -1],
        [10, -1],
        [10, -1],
        [10, -1],
        [10, -1],
        [9, -1],
        [9, -1],
        [9, -1],
        [9, -1],
        [9, -1],
        [14, -1],
        [14, -1],
        [14, -1],
        [14, -1],
        [14, -1],
      ],
    };
    var CeINlb = [];
    CeINlb[0] = {
      hGENFN: 0,
      BcfEoi: 0,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 2.0,
      MaKOHK: [
        [13477000, 4990000],
        [5670000, 5000000],
        [5210000, 4730000],
        [5210000, 5270000],
        [4740000, 4460000],
        [4760000, 5000000],
        [4740000, 5530000],
        [4280000, 4200000],
        [4300000, 4730000],
        [4300000, 5270000],
        [4280000, 5800000],
        [3820000, 3940000],
        [3830000, 4470000],
        [3840000, 5000000],
        [3830000, 5530000],
        [3820000, 6060000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, -1],
        [2, 2, -1],
        [3, 3, -1],
        [4, 4, -1],
        [5, 5, -1],
        [6, 6, -1],
        [7, 7, -1],
        [8, 8, 5],
        [9, 9, -1],
        [10, 10, -1],
        [11, 11, -1],
        [12, 12, -1],
        [13, 13, -1],
        [14, 14, -1],
        [15, 15, -1],
      ],
    };
    CeINlb[1] = {
      hGENFN: 1,
      BcfEoi: 1,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 2.0,
      MaKOHK: [
        [13477000, 4990000],
        [5670000, 5000000],
        [5210000, 4730000],
        [5210000, 5270000],
        [4740000, 4460000],
        [4760000, 5000000],
        [4740000, 5530000],
        [4280000, 4200000],
        [4300000, 4730000],
        [4300000, 5270000],
        [4280000, 5800000],
        [3820000, 3940000],
        [3830000, 4470000],
        [3840000, 5000000],
        [3830000, 5530000],
        [3820000, 6060000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, -1],
        [2, 2, -1],
        [3, 3, -1],
        [4, 4, -1],
        [5, 5, -1],
        [6, 6, -1],
        [7, 7, -1],
        [8, 8, -1],
        [9, 9, -1],
        [10, 10, -1],
        [11, 11, -1],
        [12, 12, -1],
        [13, 13, -1],
        [14, 14, -1],
        [15, 15, -1],
      ],
    };
    CeINlb[2] = {
      hGENFN: 2,
      BcfEoi: 2,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 2.0,
      MaKOHK: [
        [13477000, 4990000],
        [5790000, 5000000],
        [5300000, 4710000],
        [5300000, 5290000],
        [4800000, 4420000],
        [4820000, 5000000],
        [4800000, 5570000],
        [4310000, 4140000],
        [4330000, 4710000],
        [4330000, 5290000],
        [4310000, 5860000],
        [3820000, 3860000],
        [3830000, 4430000],
        [3840000, 5000000],
        [3830000, 5570000],
        [3820000, 6140000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, -1],
        [2, 2, -1],
        [3, 3, -1],
        [4, 4, -1],
        [5, 5, -1],
        [6, 6, -1],
        [7, 7, -1],
        [8, 8, -1],
        [9, 9, -1],
        [10, 10, -1],
        [11, 11, -1],
        [12, 12, -1],
        [13, 13, -1],
        [14, 14, -1],
        [15, 15, -1],
      ],
    };
    CeINlb[3] = {
      hGENFN: 3,
      BcfEoi: 3,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 2.0,
      MaKOHK: [
        [13125000, 5000000],
        [4850000, 5000000],
        [4850000, 3720000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2],
      ],
    };
    CeINlb[4] = {
      hGENFN: 4,
      BcfEoi: 0,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 2.0,
      MaKOHK: [
        [9000000, 6460000],
        [9000000, 4850000],
        [9270000, 4400000],
        [8730000, 4400000],
        [9530000, 3940000],
        [9000000, 3950000],
        [8470000, 3940000],
        [9780000, 3470000],
        [9260000, 3490000],
        [8740000, 3490000],
        [8220000, 3470000],
        [10040000, 3010000],
        [9520000, 3020000],
        [9000000, 3010000],
        [8480000, 3020000],
        [7960000, 3010000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, -1],
        [2, 2, -1],
        [3, 3, -1],
        [4, 4, -1],
        [5, 5, -1],
        [6, 6, -1],
        [7, 7, -1],
        [8, 8, -1],
        [9, 9, -1],
        [10, 10, -1],
        [11, 11, -1],
        [12, 12, -1],
        [13, 13, -1],
        [14, 14, -1],
        [15, 15, -1],
      ],
    };
    CeINlb[5] = {
      hGENFN: 5,
      BcfEoi: 5,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 1.4,
      MaKOHK: [
        [14700000, 5000000],
        [13150000, 3420000],
        [13150000, 6580000],
        [13150000, 5000000],
        [9000000, 5000000],
        [5870000, 5000000],
        [2220000, 5000000],
        [5390000, 5000000],
        [4980000, 4760000],
        [4980000, 5240000],
        [4570000, 4530000],
        [4580000, 5000000],
        [4570000, 5470000],
        [4160000, 4280000],
        [4170000, 4760000],
        [4170000, 5240000],
        [4160000, 5720000],
        [3750000, 4060000],
        [3760000, 4530000],
        [3750000, 5000000],
        [3760000, 5470000],
        [3750000, 5940000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
        [4, 4, 4],
        [5, 5, 5],
        [6, 6, 6],
        [7, 9, -1],
        [8, 9, -1],
        [9, 9, -1],
        [10, 9, -1],
        [11, 9, -1],
        [12, 9, -1],
        [13, 9, -1],
        [14, 9, -1],
        [15, 9, -1],
        [16, 9, -1],
        [17, 9, -1],
        [18, 9, -1],
        [19, 9, -1],
        [20, 9, -1],
        [21, 9, -1],
      ],
    };
    CeINlb[6] = {
      hGENFN: 5,
      BcfEoi: 5,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 1.4,
      MaKOHK: [
        [14700000, 5000000],
        [13150000, 3420000],
        [13150000, 6580000],
        [13150000, 5000000],
        [9000000, 5000000],
        [5870000, 5000000],
        [2220000, 5000000],
        [7430000, 5000000],
        [10570000, 5000000],
        [5390000, 5000000],
        [4980000, 4760000],
        [4980000, 5240000],
        [4570000, 4530000],
        [4580000, 5000000],
        [4570000, 5470000],
        [4160000, 4280000],
        [4170000, 4760000],
        [4170000, 5240000],
        [4160000, 5720000],
        [3750000, 4060000],
        [3760000, 4530000],
        [3750000, 5000000],
        [3760000, 5470000],
        [3750000, 5940000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
        [4, 4, 4],
        [5, 5, 5],
        [6, 6, 6],
        [7, 7, 7],
        [8, 8, 8],
        [9, 9, -1],
        [10, 9, -1],
        [11, 9, -1],
        [12, 9, -1],
        [13, 9, -1],
        [14, 9, -1],
        [15, 9, -1],
        [16, 9, -1],
        [17, 9, -1],
        [18, 9, -1],
        [19, 9, -1],
        [20, 9, -1],
        [21, 9, -1],
        [22, 9, -1],
        [23, 9, -1],
      ],
    };
    CeINlb[7] = {
      hGENFN: 0,
      BcfEoi: 4,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 2.0,
      MaKOHK: [
        [13477000, 5000000],
        [5670000, 5000000],
        [4300000, 5260000],
        [4750000, 4470000],
        [3840000, 5000000],
        [5210000, 5260000],
        [4300000, 4740000],
        [5210000, 4740000],
        [4750000, 5530000],
        [4760000, 5000000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, 1],
        [2, 2, 2],
        [3, 3, 3],
        [4, 4, 4],
        [5, 5, 5],
        [6, 6, 6],
        [7, 7, 7],
        [8, 8, 8],
        [9, 9, 9],
      ],
    };
    CeINlb[8] = {
      hGENFN: 0,
      BcfEoi: 6,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 2.0,
      MaKOHK: [
        [13477000, 4990000],
        [5670000, 5000000],
        [5210000, 4730000],
        [5210000, 5270000],
        [4740000, 4460000],
        [4760000, 5000000],
        [4740000, 5530000],
        [4280000, 4200000],
        [4300000, 4730000],
        [4300000, 5270000],
        [4280000, 5800000],
        [3820000, 3940000],
        [3830000, 4470000],
        [3840000, 5000000],
        [3830000, 5530000],
        [3820000, 6060000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, -1],
        [2, 2, -1],
        [3, 3, -1],
        [4, 4, -1],
        [5, 5, -1],
        [6, 6, -1],
        [7, 7, -1],
        [8, 8, 5],
        [9, 9, -1],
        [10, 10, -1],
        [11, 11, -1],
        [12, 12, -1],
        [13, 13, -1],
        [14, 14, -1],
        [15, 15, -1],
      ],
    };
    CeINlb[9] = {
      hGENFN: 0,
      BcfEoi: 4,
      cFhfKD: 45,
      cioEoD: 1.2,
      ngGAoo: 0.13,
      MANgff: 2.0,
      MaKOHK: [
        [13477000, 5000000],
        [5670000, 5000000],
        [4300000, 5260000],
        [4750000, 4470000],
        [3840000, 5000000],
        [5210000, 5260000],
        [4300000, 4740000],
        [5210000, 4740000],
        [4750000, 5530000],
        [4760000, 5000000],
      ],
      LdmPeG: [
        [0, 0, 0],
        [1, 1, -1],
        [2, 2, -1],
        [3, 3, -1],
        [4, 4, -1],
        [5, 5, -1],
        [6, 6, -1],
        [7, 7, -1],
        [8, 8, -1],
        [9, 9, -1],
      ],
    };
    var FBGPbj = [];
    FBGPbj[0] = {
      DFMGlO: 45,
      gPNJKB: [
        [1030000, 1030000],
        [16970000, 8970000],
      ],
      EPEBHA: [
        [13130000, 1030000],
        [16970000, 8970000],
      ],
      IgFLDM: [
        [13120000, 5000000],
        [13120000, 3420000],
      ],
      fjOCJF: {
        _1: [980000, 980000],
        _2: [980000, 9020000],
        _3: [9000000, 750000],
        _4: [9000000, 9250000],
        _5: [17020000, 980000],
        _6: [17020000, 9020000],
      },
      pdChmp: {
        _1: [635000, 635000],
        _3: [9000000, 390000],
        _5: [17365000, 635000],
        _6: [17365000, 9365000],
        _4: [9000000, 9610000],
        _2: [635000, 9365000],
      },
      IongNc: [
        [1000000, 1280000, 0, -70000, 20000, 44400000000, 72801.09889280518],
        [980000, 1210000, 0, -270000, 270000, -62100000000, 381837.66184073564],
        [710000, 940000, 1, -230000, -230000, 379500000000, 325269.11934581184],
        [940000, 710000, 0, 270000, -270000, -62100000000, 381837.66184073564],
        [1210000, 980000, 0, 20000, -70000, 44400000000, 72801.09889280518],
        [1280000, 1000000, 0, 0, -7320000, 7320000000000, 7320000],
        [
          8600000, 1000000, 0, -80000, -110000, 798000000000,
          136014.70508735444,
        ],
        [8710000, 920000, 0, -330000, -70000, 2938700000000, 337342.55586866],
        [8780000, 590000, 3, 0, -440000, 259600000000, 440000],
        [9220000, 590000, 0, 330000, -70000, -3001300000000, 337342.55586866],
        [9290000, 920000, 0, 80000, -110000, -642000000000, 136014.70508735444],
        [9400000, 1000000, 0, 0, -7320000, 7320000000000, 7320000],
        [16720000, 1000000, 0, -20000, -70000, 404400000000, 72801.09889280518],
        [
          16790000, 980000, 0, -270000, -270000, 4797900000000,
          381837.66184073564,
        ],
        [
          17060000, 710000, 5, 230000, -230000, -3760500000000,
          325269.11934581184,
        ],
        [
          17290000, 940000, 0, 270000, 270000, -4922100000000,
          381837.66184073564,
        ],
        [17020000, 1210000, 0, 70000, 20000, -1215600000000, 72801.09889280518],
        [17000000, 1280000, 0, 7440000, 0, -126480000000000, 7440000],
        [
          17000000, 8720000, 0, 70000, -20000, -1015600000000,
          72801.09889280518,
        ],
        [
          17020000, 8790000, 0, 270000, -270000, -2222100000000,
          381837.66184073564,
        ],
        [
          17290000, 9060000, 6, 230000, 230000, -6060500000000,
          325269.11934581184,
        ],
        [
          17060000, 9290000, 0, -270000, 270000, 2097900000000,
          381837.66184073564,
        ],
        [16790000, 9020000, 0, -20000, 70000, -295600000000, 72801.09889280518],
        [16720000, 9000000, 0, 0, 7320000, -65880000000000, 7320000],
        [
          9400000, 9000000, 0, 80000, 110000, -1742000000000,
          136014.70508735444,
        ],
        [9290000, 9080000, 0, 330000, 70000, -3701300000000, 337342.55586866],
        [9220000, 9410000, 4, 0, 440000, -4140400000000, 440000],
        [8780000, 9410000, 0, -330000, 70000, 2238700000000, 337342.55586866],
        [
          8710000, 9080000, 0, -80000, 110000, -302000000000,
          136014.70508735444,
        ],
        [8600000, 9000000, 0, 0, 7320000, -65880000000000, 7320000],
        [1280000, 9000000, 0, 20000, 70000, -655600000000, 72801.09889280518],
        [
          1210000, 9020000, 0, 270000, 270000, -2762100000000,
          381837.66184073564,
        ],
        [
          940000, 9290000, 2, -230000, 230000, -1920500000000,
          325269.11934581184,
        ],
        [
          710000, 9060000, 0, -270000, -270000, 2637900000000,
          381837.66184073564,
        ],
        [980000, 8790000, 0, -70000, -20000, 244400000000, 72801.09889280518],
        [1000000, 8720000, 0, -7440000, 0, 7440000000000, 7440000],
        [1000000, 1280000, 0],
      ],
      kKaEmO: [
        [
          [0, 1, 2, 3, 4, 5, 35],
          [0, 1, 2, 3, 4, 5, 35],
          null,
          null,
          null,
          null,
          null,
          [0, 1, 2, 3, 4, 5, 35],
          [0, 1, 2, 3, 4, 5, 35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [5, 0, 1, 2, 3, 4, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          [5, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [5],
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          [5],
          [5],
          [5],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [11, 5, 6, 7, 8, 9, 10],
          [11],
          [11],
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [11, 12, 13, 14, 15, 16, 17],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          [11, 12, 13, 14, 15, 16, 17],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [35, 0, 1, 2, 3, 4, 5],
          [35, 5],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [0, 1, 2, 3, 4, 5, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [5],
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [17, 11],
          [17, 11, 12, 13, 14, 15, 16],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35, 29, 30, 31, 32, 33, 34],
          [35, 29],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          [23],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          [23],
          [23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17, 23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29, 30, 31, 32, 33, 34, 35],
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29, 30, 31, 32, 33, 34, 35],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [29],
          [29],
          null,
          null,
          null,
          null,
          [29],
          [29],
          [29, 23, 24, 25, 26, 27, 28],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23],
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          [23],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23, 17],
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23, 17, 18, 19, 20, 21, 22],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17, 18, 19, 20, 21, 22, 23],
          [17, 18, 19, 20, 21, 22, 23],
          null,
          null,
          null,
          null,
          null,
          [17, 18, 19, 20, 21, 22, 23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
      ],
    };
    FBGPbj[1] = {
      DFMGlO: 55,
      gPNJKB: [
        [1160000, 1160000],
        [16840000, 8840000],
      ],
      EPEBHA: [
        [13060000, 1160000],
        [16840000, 8840000],
      ],
      IgFLDM: [
        [13050000, 5000000],
        [13050000, 3150000],
      ],
      fjOCJF: {
        _1: [1150000, 1150000],
        _2: [1150000, 8850000],
        _3: [9000000, 900000],
        _4: [9000000, 9100000],
        _5: [16850000, 1150000],
        _6: [16850000, 8850000],
      },
      pdChmp: {
        _1: [750000, 750000],
        _3: [9000000, 460000],
        _5: [17250000, 750000],
        _6: [17250000, 9250000],
        _4: [9000000, 9540000],
        _2: [750000, 9250000],
      },
      IongNc: [
        [1150000, 1420000, 0, -60000, 30000, 26400000000, 67082.03932499369],
        [1120000, 1360000, 0, -320000, 320000, -76800000000, 452548.3399593904],
        [800000, 1040000, 1, -240000, -240000, 441600000000, 339411.2549695428],
        [1040000, 800000, 0, 320000, -320000, -76800000000, 452548.3399593904],
        [1360000, 1120000, 0, 30000, -60000, 26400000000, 67082.03932499369],
        [1420000, 1150000, 0, 0, -7150000, 8222500000000, 7150000],
        [
          8570000, 1150000, 0, -90000, -110000, 897800000000,
          142126.70403551895,
        ],
        [
          8680000, 1060000, 0, -410000, -100000, 3664800000000,
          422018.95692018385,
        ],
        [8780000, 650000, 3, 0, -440000, 286000000000, 440000],
        [
          9220000, 650000, 0, 410000, -100000, -3715200000000,
          422018.95692018385,
        ],
        [
          9320000, 1060000, 0, 90000, -110000, -722200000000,
          142126.70403551895,
        ],
        [9430000, 1150000, 0, 0, -7150000, 8222500000000, 7150000],
        [16580000, 1150000, 0, -30000, -60000, 566400000000, 67082.03932499369],
        [
          16640000, 1120000, 0, -320000, -320000, 5683200000000,
          452548.3399593904,
        ],
        [
          16960000, 800000, 5, 240000, -240000, -3878400000000,
          339411.2549695428,
        ],
        [
          17200000, 1040000, 0, 320000, 320000, -5836800000000,
          452548.3399593904,
        ],
        [16880000, 1360000, 0, 60000, 30000, -1053600000000, 67082.03932499369],
        [16850000, 1420000, 0, 7160000, 0, -120646000000000, 7160000],
        [16850000, 8580000, 0, 60000, -30000, -753600000000, 67082.03932499369],
        [
          16880000, 8640000, 0, 320000, -320000, -2636800000000,
          452548.3399593904,
        ],
        [
          17200000, 8960000, 6, 240000, 240000, -6278400000000,
          339411.2549695428,
        ],
        [
          16960000, 9200000, 0, -320000, 320000, 2483200000000,
          452548.3399593904,
        ],
        [16640000, 8880000, 0, -30000, 60000, -33600000000, 67082.03932499369],
        [16580000, 8850000, 0, 0, 7150000, -63277500000000, 7150000],
        [
          9430000, 8850000, 0, 90000, 110000, -1822200000000,
          142126.70403551895,
        ],
        [
          9320000, 8940000, 0, 410000, 100000, -4715200000000,
          422018.95692018385,
        ],
        [9220000, 9350000, 4, 0, 440000, -4114000000000, 440000],
        [
          8780000, 9350000, 0, -410000, 100000, 2664800000000,
          422018.95692018385,
        ],
        [
          8680000, 8940000, 0, -90000, 110000, -202200000000,
          142126.70403551895,
        ],
        [8570000, 8850000, 0, 0, 7150000, -63277500000000, 7150000],
        [1420000, 8850000, 0, 30000, 60000, -573600000000, 67082.03932499369],
        [
          1360000, 8880000, 0, 320000, 320000, -3276800000000,
          452548.3399593904,
        ],
        [
          1040000, 9200000, 2, -240000, 240000, -1958400000000,
          339411.2549695428,
        ],
        [
          800000, 8960000, 0, -320000, -320000, 3123200000000,
          452548.3399593904,
        ],
        [1120000, 8640000, 0, -60000, -30000, 326400000000, 67082.03932499369],
        [1150000, 8580000, 0, -7160000, 0, 8234000000000, 7160000],
        [1150000, 1420000, 0],
      ],
      kKaEmO: [
        [
          [0, 1, 2, 3, 4, 5, 35],
          [0, 1, 2, 3, 4, 5, 35],
          null,
          null,
          null,
          null,
          null,
          [0, 1, 2, 3, 4, 5, 35],
          [0, 1, 2, 3, 4, 5, 35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [5, 0, 1, 2, 3, 4, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          [5, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [5],
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          [5],
          [5],
          [5],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [11, 5, 6, 7, 8, 9, 10],
          [11],
          [11],
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [11, 12, 13, 14, 15, 16, 17],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          [11, 12, 13, 14, 15, 16, 17],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [35, 0, 1, 2, 3, 4, 5],
          [35, 5],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [0, 1, 2, 3, 4, 5, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [5],
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [17, 11],
          [17, 11, 12, 13, 14, 15, 16],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35, 29, 30, 31, 32, 33, 34],
          [35, 29],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          [23],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          [23],
          [23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17, 23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29, 30, 31, 32, 33, 34, 35],
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29, 30, 31, 32, 33, 34, 35],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [29],
          [29],
          null,
          null,
          null,
          null,
          [29],
          [29],
          [29, 23, 24, 25, 26, 27, 28],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23],
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          [23],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23, 17],
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23, 17, 18, 19, 20, 21, 22],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17, 18, 19, 20, 21, 22, 23],
          [17, 18, 19, 20, 21, 22, 23],
          null,
          null,
          null,
          null,
          null,
          [17, 18, 19, 20, 21, 22, 23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
      ],
    };
    FBGPbj[2] = {
      DFMGlO: 45,
      gPNJKB: [
        [1050000, 1050000],
        [16950000, 8950000],
      ],
      EPEBHA: [
        [13130000, 1050000],
        [16950000, 8950000],
      ],
      IgFLDM: [
        [13120000, 5000000],
        [13120000, 3420000],
      ],
      fjOCJF: {
        _1: [1000000, 1000000],
        _2: [1000000, 9000000],
        _3: [9000000, 750000],
        _4: [9000000, 9250000],
        _5: [17000000, 1000000],
        _6: [17000000, 9000000],
      },
      pdChmp: {
        _1: [635000, 635000],
        _3: [9000000, 390000],
        _5: [17365000, 635000],
        _6: [17365000, 9365000],
        _4: [9000000, 9610000],
        _2: [635000, 9365000],
      },
      IongNc: [
        [1020000, 1230000, 0, -80000, 30000, 44700000000, 85440.03745317532],
        [990000, 1150000, 0, -280000, 280000, -44800000000, 395979.7974644666],
        [710000, 870000, 1, -160000, -160000, 252800000000, 226274.1699796952],
        [870000, 710000, 0, 280000, -280000, -44800000000, 395979.7974644666],
        [1150000, 990000, 0, 30000, -80000, 44700000000, 85440.03745317532],
        [1230000, 1020000, 0, 0, -7390000, 7537800000000, 7390000],
        [
          8620000, 1020000, 0, -120000, -140000, 1177200000000,
          184390.88914585774,
        ],
        [8760000, 900000, 0, -320000, -60000, 2857200000000, 325576.4119219941],
        [8820000, 580000, 3, 0, -360000, 208800000000, 360000],
        [9180000, 580000, 0, 320000, -60000, -2902800000000, 325576.4119219941],
        [
          9240000, 900000, 0, 120000, -140000, -982800000000,
          184390.88914585774,
        ],
        [9380000, 1020000, 0, 0, -7390000, 7537800000000, 7390000],
        [16770000, 1020000, 0, -30000, -80000, 584700000000, 85440.03745317532],
        [
          16850000, 990000, 0, -280000, -280000, 4995200000000,
          395979.7974644666,
        ],
        [
          17130000, 710000, 5, 160000, -160000, -2627200000000,
          226274.1699796952,
        ],
        [
          17290000, 870000, 0, 280000, 280000, -5084800000000,
          395979.7974644666,
        ],
        [17010000, 1150000, 0, 80000, 30000, -1395300000000, 85440.03745317532],
        [16980000, 1230000, 0, 7540000, 0, -128029200000000, 7540000],
        [
          16980000, 8770000, 0, 80000, -30000, -1095300000000,
          85440.03745317532,
        ],
        [
          17010000, 8850000, 0, 280000, -280000, -2284800000000,
          395979.7974644666,
        ],
        [
          17290000, 9130000, 6, 160000, 160000, -4227200000000,
          226274.1699796952,
        ],
        [
          17130000, 9290000, 0, -280000, 280000, 2195200000000,
          395979.7974644666,
        ],
        [16850000, 9010000, 0, -30000, 80000, -215300000000, 85440.03745317532],
        [16770000, 8980000, 0, 0, 7390000, -66362200000000, 7390000],
        [
          9380000, 8980000, 0, 120000, 140000, -2382800000000,
          184390.88914585774,
        ],
        [9240000, 9100000, 0, 320000, 60000, -3502800000000, 325576.4119219941],
        [9180000, 9420000, 4, 0, 360000, -3391200000000, 360000],
        [8820000, 9420000, 0, -320000, 60000, 2257200000000, 325576.4119219941],
        [
          8760000, 9100000, 0, -120000, 140000, -222800000000,
          184390.88914585774,
        ],
        [8620000, 8980000, 0, 0, 7390000, -66362200000000, 7390000],
        [1230000, 8980000, 0, 30000, 80000, -755300000000, 85440.03745317532],
        [
          1150000, 9010000, 0, 280000, 280000, -2844800000000,
          395979.7974644666,
        ],
        [
          870000, 9290000, 2, -160000, 160000, -1347200000000,
          226274.1699796952,
        ],
        [
          710000, 9130000, 0, -280000, -280000, 2755200000000,
          395979.7974644666,
        ],
        [990000, 8850000, 0, -80000, -30000, 344700000000, 85440.03745317532],
        [1020000, 8770000, 0, -7540000, 0, 7690800000000, 7540000],
        [1020000, 1230000, 0],
      ],
      kKaEmO: [
        [
          [0, 1, 2, 3, 4, 5, 35],
          [0, 1, 2, 3, 4, 5, 35],
          null,
          null,
          null,
          null,
          null,
          [0, 1, 2, 3, 4, 5, 35],
          [0, 1, 2, 3, 4, 5, 35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [5, 0, 1, 2, 3, 4, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          [5, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [5],
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          [5],
          [5],
          [5],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [11, 5, 6, 7, 8, 9, 10],
          [11],
          [11],
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [11, 12, 13, 14, 15, 16, 17],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          [11, 12, 13, 14, 15, 16, 17],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [35, 0, 1, 2, 3, 4, 5],
          [35, 5],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [0, 1, 2, 3, 4, 5, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [5],
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [17, 11],
          [17, 11, 12, 13, 14, 15, 16],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35, 29, 30, 31, 32, 33, 34],
          [35, 29],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          [23],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          [23],
          [23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17, 23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29, 30, 31, 32, 33, 34, 35],
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29, 30, 31, 32, 33, 34, 35],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [29],
          [29],
          null,
          null,
          null,
          null,
          [29],
          [29],
          [29, 23, 24, 25, 26, 27, 28],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23],
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          [23],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23, 17],
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23, 17, 18, 19, 20, 21, 22],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17, 18, 19, 20, 21, 22, 23],
          [17, 18, 19, 20, 21, 22, 23],
          null,
          null,
          null,
          null,
          null,
          [17, 18, 19, 20, 21, 22, 23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
      ],
    };
    FBGPbj[3] = {
      DFMGlO: 45,
      gPNJKB: [
        [1020000, 1020000],
        [16980000, 8980000],
      ],
      EPEBHA: [
        [13130000, 1020000],
        [16980000, 8980000],
      ],
      IgFLDM: [
        [13120000, 5000000],
        [13120000, 3420000],
      ],
      fjOCJF: {},
      pdChmp: {},
      IongNc: [
        [1010000, 1010000, null, 0, -15980000, 16139800000000, 15980000],
        [16990000, 1010000, null, 7980000, 0, -135580200000000, 7980000],
        [16990000, 8990000, null, 0, 15980000, -143660200000000, 15980000],
        [1010000, 8990000, null, -7980000, 0, 8059800000000, 7980000],
        [1010000, 1010000, null],
      ],
      kKaEmO: [
        [
          [0, 3],
          [0, 3],
          null,
          null,
          null,
          null,
          null,
          [0, 3],
          [0, 3],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [0, 3],
          [0],
          [0],
          null,
          null,
          null,
          null,
          [0, 3],
          [0],
          [0],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [0],
          [0],
          [0, 1],
          null,
          null,
          null,
          null,
          [0],
          [0],
          [0, 1],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [0, 1],
          [0, 1],
          null,
          null,
          null,
          null,
          null,
          [0, 1],
          [0, 1],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [3, 0],
          [3, 0],
          null,
          null,
          null,
          null,
          null,
          [3],
          [3],
          null,
          null,
          null,
          null,
          null,
          [3],
          [3],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [0, 3],
          [0],
          [0],
          null,
          null,
          null,
          null,
          [3],
          null,
          null,
          null,
          null,
          null,
          null,
          [3],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [0],
          [0],
          [0],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [0],
          [0],
          [0, 1],
          null,
          null,
          null,
          null,
          null,
          null,
          [1],
          null,
          null,
          null,
          null,
          null,
          null,
          [1],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [1, 0],
          [1, 0],
          null,
          null,
          null,
          null,
          null,
          [1],
          [1],
          null,
          null,
          null,
          null,
          null,
          [1],
          [1],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [3],
          [3],
          null,
          null,
          null,
          null,
          null,
          [3],
          [3],
          null,
          null,
          null,
          null,
          null,
          [3, 2],
          [3, 2],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [3],
          null,
          null,
          null,
          null,
          null,
          null,
          [3],
          null,
          null,
          null,
          null,
          null,
          null,
          [2, 3],
          [2],
          [2],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [1],
          null,
          null,
          null,
          null,
          null,
          null,
          [1],
          null,
          null,
          null,
          null,
          [2],
          [2],
          [1, 2],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [1],
          [1],
          null,
          null,
          null,
          null,
          null,
          [1],
          [1],
          null,
          null,
          null,
          null,
          null,
          [1, 2],
          [1, 2],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2, 3],
          [2, 3],
          null,
          null,
          null,
          null,
          null,
          [2, 3],
          [2, 3],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2, 3],
          [2],
          [2],
          null,
          null,
          null,
          null,
          [2, 3],
          [2],
          [2],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2, 1],
          null,
          null,
          null,
          null,
          [2],
          [2],
          [2, 1],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [1, 2],
          [1, 2],
          null,
          null,
          null,
          null,
          null,
          [1, 2],
          [1, 2],
        ],
      ],
    };
    FBGPbj[4] = {
      DFMGlO: 45,
      gPNJKB: [
        [1010000, 2830000],
        [16990000, 7170000],
      ],
      EPEBHA: [
        [5990000, 5490000],
        [12010000, 7170000],
      ],
      IgFLDM: [
        [9000000, 5480000],
        [10190000, 5480000],
      ],
      fjOCJF: {
        _1: [980000, 980000],
        _2: [980000, 9020000],
        _3: [17020000, 980000],
        _4: [17020000, 9020000],
      },
      pdChmp: {
        _1: [635000, 635000],
        _3: [17365000, 635000],
        _4: [17365000, 9365000],
        _2: [635000, 9365000],
      },
      IongNc: [
        [1000000, 1280000, 0, -70000, 20000, 44400000000, 72801.09889280518],
        [980000, 1210000, 0, -270000, 270000, -62100000000, 381837.66184073564],
        [710000, 940000, 1, -230000, -230000, 379500000000, 325269.11934581184],
        [940000, 710000, 0, 270000, -270000, -62100000000, 381837.66184073564],
        [1210000, 980000, 0, 20000, -70000, 44400000000, 72801.09889280518],
        [1280000, 1000000, 0, 0, -2900000, 2900000000000, 2900000],
        [
          4180000, 1000000, 0, 1800000, -1800000, -5724000000000,
          2545584.412271571,
        ],
        [5980000, 2800000, 0, 0, -6040000, 16912000000000, 6040000],
        [
          12020000, 2800000, 0, -1800000, -1800000, 26676000000000,
          2545584.412271571,
        ],
        [13820000, 1000000, 0, 0, -2900000, 2900000000000, 2900000],
        [16720000, 1000000, 0, -20000, -70000, 404400000000, 72801.09889280518],
        [
          16790000, 980000, 0, -270000, -270000, 4797900000000,
          381837.66184073564,
        ],
        [
          17060000, 710000, 3, 230000, -230000, -3760500000000,
          325269.11934581184,
        ],
        [
          17290000, 940000, 0, 270000, 270000, -4922100000000,
          381837.66184073564,
        ],
        [17020000, 1210000, 0, 70000, 20000, -1215600000000, 72801.09889280518],
        [17000000, 1280000, 0, 7440000, 0, -126480000000000, 7440000],
        [
          17000000, 8720000, 0, 70000, -20000, -1015600000000,
          72801.09889280518,
        ],
        [
          17020000, 8790000, 0, 270000, -270000, -2222100000000,
          381837.66184073564,
        ],
        [
          17290000, 9060000, 4, 230000, 230000, -6060500000000,
          325269.11934581184,
        ],
        [
          17060000, 9290000, 0, -270000, 270000, 2097900000000,
          381837.66184073564,
        ],
        [16790000, 9020000, 0, -20000, 70000, -295600000000, 72801.09889280518],
        [16720000, 9000000, 0, 0, 2900000, -26100000000000, 2900000],
        [
          13820000, 9000000, 0, -1800000, 1800000, 8676000000000,
          2545584.412271571,
        ],
        [12020000, 7200000, 0, 0, 6040000, -43488000000000, 6040000],
        [
          5980000, 7200000, 0, 1800000, 1800000, -23724000000000,
          2545584.412271571,
        ],
        [4180000, 9000000, 0, 0, 2900000, -26100000000000, 2900000],
        [1280000, 9000000, 0, 20000, 70000, -655600000000, 72801.09889280518],
        [
          1210000, 9020000, 0, 270000, 270000, -2762100000000,
          381837.66184073564,
        ],
        [
          940000, 9290000, 2, -230000, 230000, -1920500000000,
          325269.11934581184,
        ],
        [
          710000, 9060000, 0, -270000, -270000, 2637900000000,
          381837.66184073564,
        ],
        [980000, 8790000, 0, -70000, -20000, 244400000000, 72801.09889280518],
        [1000000, 8720000, 0, -7440000, 0, 7440000000000, 7440000],
        [1000000, 1280000, 0],
      ],
      kKaEmO: [
        [
          [0, 1, 2, 3, 4, 5, 31],
          [0, 1, 2, 3, 4, 5, 31, 6],
          null,
          null,
          null,
          null,
          null,
          [0, 1, 2, 3, 4, 5, 31],
          [0, 1, 2, 3, 4, 5, 31],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [5, 6, 0, 1, 2, 3, 4, 31],
          [5, 6],
          [5, 6],
          null,
          null,
          null,
          null,
          [5, 6, 31],
          [5, 6],
          [5, 6, 7],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [6, 5],
          [6],
          [6],
          null,
          null,
          null,
          null,
          [6],
          [6, 7],
          [6, 7],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [6],
          null,
          [8],
          null,
          null,
          null,
          null,
          [6, 7],
          [7],
          [7, 8],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [8],
          [8],
          [8, 9],
          null,
          null,
          null,
          null,
          [8, 7],
          [8, 7],
          [8],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [8, 9],
          [8, 9],
          [8, 9, 10, 11, 12, 13, 14, 15],
          null,
          null,
          null,
          null,
          [8, 9, 7],
          [8, 9],
          [8, 9, 15],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [9, 10, 11, 12, 13, 14, 15, 8],
          [9, 10, 11, 12, 13, 14, 15],
          null,
          null,
          null,
          null,
          null,
          [9, 10, 11, 12, 13, 14, 15],
          [9, 10, 11, 12, 13, 14, 15],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [31, 0, 1, 2, 3, 4, 5],
          [31, 5, 6],
          null,
          null,
          null,
          null,
          null,
          [31],
          [31],
          null,
          null,
          null,
          null,
          null,
          [31],
          [31],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [0, 1, 2, 3, 4, 5, 31],
          [5, 6],
          [6],
          null,
          null,
          null,
          null,
          [31],
          null,
          [6, 7],
          null,
          null,
          null,
          null,
          [31],
          null,
          [23, 24],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [6, 7, 5],
          [6, 7],
          [6, 7],
          null,
          null,
          null,
          null,
          [6, 7],
          [6, 7],
          [6, 7],
          null,
          null,
          null,
          null,
          [6, 7],
          [6, 7, 23, 24],
          [6, 7, 23],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [7, 6],
          [7],
          [7, 8],
          null,
          null,
          null,
          null,
          [7, 6],
          [7],
          [7, 8],
          null,
          null,
          null,
          null,
          [7, 23, 24],
          [7, 23],
          [7, 22, 23],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [7, 8],
          [7, 8],
          [7, 8, 9],
          null,
          null,
          null,
          null,
          [7, 8],
          [7, 8],
          [7, 8],
          null,
          null,
          null,
          null,
          [7, 8, 23],
          [7, 8, 22, 23],
          [7, 8],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [8],
          [8, 9],
          [9, 10, 11, 12, 13, 14, 15],
          null,
          null,
          null,
          null,
          [7, 8],
          null,
          [15],
          null,
          null,
          null,
          null,
          [22, 23],
          null,
          [15],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [15, 8, 9],
          [15, 9, 10, 11, 12, 13, 14],
          null,
          null,
          null,
          null,
          null,
          [15],
          [15],
          null,
          null,
          null,
          null,
          null,
          [15],
          [15],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [31],
          [31],
          null,
          null,
          null,
          null,
          null,
          [31],
          [31],
          null,
          null,
          null,
          null,
          null,
          [31, 25, 26, 27, 28, 29, 30],
          [31, 24, 25],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [31],
          null,
          [6, 7],
          null,
          null,
          null,
          null,
          [31],
          null,
          [23, 24],
          null,
          null,
          null,
          null,
          [25, 26, 27, 28, 29, 30, 31],
          [24, 25],
          [24],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24],
          [23, 24, 6, 7],
          [23, 24, 7],
          null,
          null,
          null,
          null,
          [23, 24],
          [23, 24],
          [23, 24],
          null,
          null,
          null,
          null,
          [23, 24, 25],
          [23, 24],
          [23, 24],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 6, 7],
          [23, 7],
          [23, 7, 8],
          null,
          null,
          null,
          null,
          [23, 24],
          [23],
          [23, 22],
          null,
          null,
          null,
          null,
          [23, 24],
          [23],
          [23, 22],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [22, 23, 7],
          [22, 23, 7, 8],
          [22, 23],
          null,
          null,
          null,
          null,
          [22, 23],
          [22, 23],
          [22, 23],
          null,
          null,
          null,
          null,
          [22, 23],
          [22, 23],
          [22, 23, 21],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [7, 8],
          null,
          [15],
          null,
          null,
          null,
          null,
          [22, 23],
          null,
          [15],
          null,
          null,
          null,
          null,
          [22],
          [21, 22],
          [15, 16, 17, 18, 19, 20, 21],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [15],
          [15],
          null,
          null,
          null,
          null,
          null,
          [15],
          [15],
          null,
          null,
          null,
          null,
          null,
          [15, 21, 22],
          [15, 16, 17, 18, 19, 20, 21],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [25, 26, 27, 28, 29, 30, 31],
          [25, 26, 27, 28, 29, 30, 31],
          null,
          null,
          null,
          null,
          null,
          [25, 26, 27, 28, 29, 30, 31],
          [25, 26, 27, 28, 29, 30, 31, 24],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [24, 25, 31],
          [24, 25],
          [24, 25, 23],
          null,
          null,
          null,
          null,
          [24, 25, 26, 27, 28, 29, 30, 31],
          [24, 25],
          [24, 25],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [24],
          [24, 23],
          [24, 23],
          null,
          null,
          null,
          null,
          [24, 25],
          [24],
          [24],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24],
          [23],
          [22, 23],
          null,
          null,
          null,
          null,
          [24],
          null,
          [22],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [22, 23],
          [22, 23],
          [22],
          null,
          null,
          null,
          null,
          [22],
          [22],
          [22, 21],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [21, 22, 23],
          [21, 22],
          [21, 22, 15],
          null,
          null,
          null,
          null,
          [21, 22],
          [21, 22],
          [21, 22, 15, 16, 17, 18, 19, 20],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [15, 16, 17, 18, 19, 20, 21],
          [15, 16, 17, 18, 19, 20, 21],
          null,
          null,
          null,
          null,
          null,
          [15, 16, 17, 18, 19, 20, 21, 22],
          [15, 16, 17, 18, 19, 20, 21],
        ],
      ],
    };
    FBGPbj[5] = {
      DFMGlO: 45,
      gPNJKB: [
        [980000, 980000],
        [17020000, 9020000],
      ],
      EPEBHA: [
        [13130000, 980000],
        [17020000, 9020000],
      ],
      IgFLDM: [
        [13120000, 5000000],
        [13120000, 3420000],
      ],
      fjOCJF: {
        _1: [970000, 970000],
        _2: [970000, 9030000],
        _3: [9000000, 750000],
        _4: [9000000, 9250000],
        _5: [17030000, 970000],
        _6: [17030000, 9030000],
      },
      pdChmp: {
        _1: [620000, 620000],
        _3: [9000000, 480000],
        _5: [17380000, 620000],
        _6: [17380000, 9380000],
        _4: [9000000, 9520000],
        _2: [620000, 9380000],
      },
      IongNc: [
        [970000, 1250000, 0, -50000, 10000, 36000000000, 50990.19513592785],
        [960000, 1200000, 0, -280000, 250000, -31200000000, 375366.4875824692],
        [710000, 920000, 1, -210000, -210000, 342300000000, 296984.84809834993],
        [920000, 710000, 0, 250000, -280000, -31200000000, 375366.4875824692],
        [1200000, 960000, 0, 10000, -50000, 36000000000, 50990.19513592785],
        [1250000, 970000, 0, 0, -7380000, 7158600000000, 7380000],
        [8630000, 970000, 0, -30000, -60000, 317100000000, 67082.03932499369],
        [8690000, 940000, 0, -260000, -140000, 2391000000000, 295296.461204668],
        [8830000, 680000, 3, 0, -340000, 231200000000, 340000],
        [9170000, 680000, 0, 260000, -140000, -2289000000000, 295296.461204668],
        [9310000, 940000, 0, 30000, -60000, -222900000000, 67082.03932499369],
        [9370000, 970000, 0, 0, -7380000, 7158600000000, 7380000],
        [16750000, 970000, 0, -10000, -50000, 216000000000, 50990.19513592785],
        [
          16800000, 960000, 0, -250000, -280000, 4468800000000,
          375366.4875824692,
        ],
        [
          17080000, 710000, 5, 210000, -210000, -3437700000000,
          296984.84809834993,
        ],
        [
          17290000, 920000, 0, 280000, 250000, -5071200000000,
          375366.4875824692,
        ],
        [17040000, 1200000, 0, 50000, 10000, -864000000000, 50990.19513592785],
        [17030000, 1250000, 0, 7500000, 0, -127725000000000, 7500000],
        [17030000, 8750000, 0, 50000, -10000, -764000000000, 50990.19513592785],
        [
          17040000, 8800000, 0, 280000, -250000, -2571200000000,
          375366.4875824692,
        ],
        [
          17290000, 9080000, 6, 210000, 210000, -5537700000000,
          296984.84809834993,
        ],
        [
          17080000, 9290000, 0, -250000, 280000, 1668800000000,
          375366.4875824692,
        ],
        [16800000, 9040000, 0, -10000, 50000, -284000000000, 50990.19513592785],
        [16750000, 9030000, 0, 0, 7380000, -66641400000000, 7380000],
        [9370000, 9030000, 0, 30000, 60000, -822900000000, 67082.03932499369],
        [9310000, 9060000, 0, 260000, 140000, -3689000000000, 295296.461204668],
        [9170000, 9320000, 4, 0, 340000, -3168800000000, 340000],
        [8830000, 9320000, 0, -260000, 140000, 991000000000, 295296.461204668],
        [8690000, 9060000, 0, -30000, 60000, -282900000000, 67082.03932499369],
        [8630000, 9030000, 0, 0, 7380000, -66641400000000, 7380000],
        [1250000, 9030000, 0, 10000, 50000, -464000000000, 50990.19513592785],
        [
          1200000, 9040000, 0, 250000, 280000, -2831200000000,
          375366.4875824692,
        ],
        [
          920000, 9290000, 2, -210000, 210000, -1757700000000,
          296984.84809834993,
        ],
        [
          710000, 9080000, 0, -280000, -250000, 2468800000000,
          375366.4875824692,
        ],
        [960000, 8800000, 0, -50000, -10000, 136000000000, 50990.19513592785],
        [970000, 8750000, 0, -7500000, 0, 7275000000000, 7500000],
        [970000, 1250000, 0],
      ],
      kKaEmO: [
        [
          [0, 1, 2, 3, 4, 5, 35],
          [0, 1, 2, 3, 4, 5, 35],
          null,
          null,
          null,
          null,
          null,
          [0, 1, 2, 3, 4, 5, 35],
          [0, 1, 2, 3, 4, 5, 35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [5, 0, 1, 2, 3, 4, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          [5, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [5],
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          [5],
          [5],
          [5],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [11, 5, 6, 7, 8, 9, 10],
          [11],
          [11],
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [11, 12, 13, 14, 15, 16, 17],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          [11, 12, 13, 14, 15, 16, 17],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [35, 0, 1, 2, 3, 4, 5],
          [35, 5],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          [0, 1, 2, 3, 4, 5, 35],
          [5],
          [5],
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          [5],
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          [5],
          [5, 6, 7, 8, 9, 10, 11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          [5, 6, 7, 8, 9, 10, 11],
          [11],
          [11],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          [11],
          [11],
          [11, 12, 13, 14, 15, 16, 17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          [17, 11],
          [17, 11, 12, 13, 14, 15, 16],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35],
          [35],
          null,
          null,
          null,
          null,
          null,
          [35, 29, 30, 31, 32, 33, 34],
          [35, 29],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [35],
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          [23],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          null,
          null,
          null,
          null,
          [23],
          [23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17],
          [17],
          null,
          null,
          null,
          null,
          null,
          [17, 23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29, 30, 31, 32, 33, 34, 35],
          null,
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29, 30, 31, 32, 33, 34, 35],
          null,
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
          [29, 30, 31, 32, 33, 34, 35],
          [29],
          [29],
          null,
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [29],
          [29],
          [29],
          null,
          null,
          null,
          null,
          [29],
          [29],
          [29, 23, 24, 25, 26, 27, 28],
          null,
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          [23, 24, 25, 26, 27, 28, 29],
          null,
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23],
          null,
          null,
          null,
          null,
          [23, 24, 25, 26, 27, 28, 29],
          [23],
          [23],
          null,
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23, 17],
          null,
          null,
          null,
          null,
          [23],
          [23],
          [23, 17, 18, 19, 20, 21, 22],
        ],
        [
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          null,
          [17, 18, 19, 20, 21, 22, 23],
          [17, 18, 19, 20, 21, 22, 23],
          null,
          null,
          null,
          null,
          null,
          [17, 18, 19, 20, 21, 22, 23],
          [17, 18, 19, 20, 21, 22, 23],
        ],
      ],
    };
    var ioDFlJ, KHeDBn, dlAeph, fPcAaE, EeEcdE, NNpOHi, JipEnK, lplcPg;
    var EKClpk, cFPbma, ecMoLj, ifECaD, aBLojO, igLkIf;
    var PMhlDk, MopFdB, hLGdKD, IAgCEg, lpdaLi;
    var IjBnIK,
      gALocH,
      kmaGGH,
      ONBddG,
      FmpDmn,
      kIJfpF,
      EhiGJm,
      fcBlmE,
      HILbHF,
      HKlKeD;
    var HoAiGf,
      LCmCDL,
      jljapo,
      eainEa,
      bNKmKc,
      pKODfp,
      HMoELa,
      MDNOhF,
      nKeCMk,
      ajHBNc,
      imhDfA,
      IhFMmH,
      bjOIeP;
    var mKOCDb,
      CaLnck,
      eHajOg,
      cJNdmh,
      MCNlab,
      oPmaHg,
      PcccbF,
      fmlfgp,
      FIDfCN,
      BAOOEO,
      DMeMhf;
    var JkDLhk = Math.round(Math.random() * 1000000);
    var lcILbb = BLAZE.nHKIje.gJGCgd(JkDLhk);
    var lPdHHA = function (nAJgdM) {
      var jnJBBo = nAJgdM;
      nAJgdM.lPdHHA = this;
      this.dDDJLB = 0;
      this.EAflFm = false;
      this.bDJojN = false;
      this.iLFnOJ = true;
      this.hKEffH = true;
      this.FiGccl = 1;
      this.HJLhEI = function (CbINMc) {
        if (CbINMc != lcILbb) {
          window.location.href = "/";
        }
        return JkDLhk;
      };
      this.fFMGmD = function (kEmakh, nHhEnP, mHDNEJ) {
        return jnJBBo.fFMGmD(kEmakh, nHhEnP, mHDNEJ);
      };
      this.GIfDAK = function () {
        jnJBBo.GIfDAK();
      };
      this.efoilB = function (FcjjJm) {
        jnJBBo.efoilB(FcjjJm);
      };
      this.lBgbNP = function () {
        jnJBBo.lBgbNP();
      };
      this.FKFMmF = function () {
        jnJBBo.FKFMmF();
      };
      this.HeedgM = function () {
        jnJBBo.HeedgM();
      };
      this.hcLEeN = function (JcLoBg) {
        jnJBBo.hcLEeN(JcLoBg);
      };
      this.iPJlAG = function (iOKbkM) {
        jnJBBo.iPJlAG(iOKbkM);
      };
      this.lKNOFa = function (fIjFDB) {
        jnJBBo.lKNOFa(fIjFDB);
      };
      this.eEelho = function (CIkflk) {
        jnJBBo.eEelho(CIkflk);
      };
      this.CPFcMg = function (lHFILo) {
        return jnJBBo.CPFcMg(lHFILo);
      };
      this.lGpjEo = function (lHFILo) {
        return jnJBBo.lGpjEo(lHFILo);
      };
      this.fgjdEE = function (lHFILo) {
        return jnJBBo.fgjdEE(lHFILo);
      };
    };
    var kJfBld = function (pKiKCF) {
      this.PpKPIa(pKiKCF);
    };
    kJfBld.prototype.PpKPIa = function (pKiKCF) {
      if (pKiKCF.length < 2) {
        $error(20819591);
        return;
      }
      if (this.ijmngN) {
        $error(20819592);
        return;
      }
      if (!FlhgdA(pKiKCF[0])) {
        $error(20819593);
        return;
      }
      if (pKiKCF[1]) {
        ipiMeH = 1;
      } else {
        ipiMeH = 0;
      }
      this.lPdHHA = null;
      this.FMdgGo = BLAZE.nHKIje.OCAilP();
      this.ohiNnb = false;
      this.ciNgdE();
      this.ijmngN = pKiKCF[0];
      this.HGpCdd = null;
      this.ocBnBA = null;
      this.ImkhAe = null;
      this.eHDpeC = null;
      this.eIFOFn = null;
      this.KkEMiL = new BLAZE.CbIDAm(
        "BilliardsRenderer",
        cmbjGA[0],
        cmbjGA[1],
        1,
        ipiMeH
      );
      this.KkEMiL.ILMNDn = true;
      this.KkEMiL.jkaFOn = false;
      this.KkEMiL.jfgmcH = false;
      this.KkEMiL.EEfbOm.GmKkeP = true;
      this.CgbpOO = BLAZE.nHKIje.mbcAmA("element", "game.billiards_cue");
      if (!this.CgbpOO) {
        $error(68377191);
        return;
      }
      eCaHCJ.hdhbKA(this.CgbpOO);
      this.cjfpnD = this.CgbpOO.dBcMeJ.container;
      this.CELFjd = this.CgbpOO.dBcMeJ.source;
      this.lFDcfc = this.CgbpOO.dBcMeJ.anim;
      if (!this.cjfpnD || !this.CELFjd || !this.lFDcfc) {
        $error(68377192);
        return;
      }
      this.EIefAg = BLAZE.nHKIje.mbcAmA("element", "game.billiards_table");
      if (!this.EIefAg) {
        $error(63950928);
        return;
      }
      eCaHCJ.hdhbKA(this.EIefAg);
      this.EIefAg.oBAgKJ = true;
      this.hgenej = BLAZE.nHKIje.mbcAmA(
        "element",
        "game.billiards_effect_foreground"
      );
      if (!this.hgenej) {
        $error(59039921);
        return;
      }
      this.JFnPgF = BLAZE.nHKIje.mbcAmA(
        "element",
        "game.billiards_effect_background"
      );
      if (!this.JFnPgF) {
        $error(59683746);
        return;
      }
      eCaHCJ.hdhbKA(this.hgenej);
      eCaHCJ.hdhbKA(this.JFnPgF);
      this.PFOljF = BLAZE.nHKIje.mbcAmA("element", "game.billiards_guide");
      if (!this.PFOljF) {
        $error(11927504);
        return;
      }
      eCaHCJ.hdhbKA(this.PFOljF);
      this.fGCcNM = this.PFOljF.dBcMeJ.start;
      this.mlmAGe = this.PFOljF.dBcMeJ.start_line;
      this.CMkpOK = this.PFOljF.dBcMeJ.end;
      this.eNIHhC = this.PFOljF.dBcMeJ.end_line;
      this.BnoIaF = this.PFOljF.dBcMeJ.collider;
      this.EHjCLJ = this.PFOljF.dBcMeJ.collider_line;
      this.eIFOFn = BLAZE.nHKIje.mbcAmA("element", "game.billiards_place_ball");
      if (!this.eIFOFn) {
        $error(49862271);
        return;
      }
      eCaHCJ.hdhbKA(this.eIFOFn);
      this.eIFOFn.DNPfDh = true;
      this.eIFOFn.FcjjJm = null;
      this.eIFOFn.gdLFmD = false;
      this.eIFOFn.classList.remove("deny");
      this.eIFOFn.nFBFbe = [0, 0];
      this.MNkbEB = BLAZE.nHKIje.mbcAmA("element", "game.billiards_spin_menu");
      if (!this.MNkbEB) {
        $error(94870278);
        return;
      }
      eCaHCJ.hdhbKA(this.MNkbEB);
      var mMnbaJ = this;
      this.BIjkDg = function (kiPjJb) {
        mMnbaJ.MDFfNa(kiPjJb);
      };
      this.dOOOAd = function (kiPjJb) {
        mMnbaJ.aMafId(kiPjJb);
      };
      this.noOoBo = function (kiPjJb) {
        mMnbaJ.dElBBP(kiPjJb);
      };
      this.gjMFoL = function (kiPjJb) {
        mMnbaJ.mICDkd(kiPjJb);
      };
      this.aANONd = function (kiPjJb) {
        mMnbaJ.OGOFGk(kiPjJb);
      };
      this.lbiekL = function (kiPjJb) {
        mMnbaJ.JfkIKm(kiPjJb);
      };
      this.plOmKH = function (kiPjJb) {
        mMnbaJ.hbDNId(kiPjJb);
      };
      this.bcMlmF = function (kiPjJb) {
        mMnbaJ.hLeciN(kiPjJb);
      };
      this.MEnCDO = function (kiPjJb) {
        mMnbaJ.pnKMDG(kiPjJb);
      };
      this.MlbIPJ = function (kiPjJb) {
        mMnbaJ.OfJfgj(kiPjJb);
      };
      this.fjFBDc = function (kiPjJb) {
        mMnbaJ.GgDEmE(kiPjJb);
      };
    };
    kJfBld.prototype.fFMGmD = function (kEmakh, nHhEnP, mHDNEJ) {
      if (!this.ijmngN) {
        $warn(2290681);
        return false;
      }
      if (this.ohiNnb) {
        $warn(2290682);
        return false;
      }
      if (!kEmakh) {
        $warn(2290683);
        return false;
      }
      if (!nHhEnP) {
        $warn(2290684);
        return false;
      }
      var pPokEL = 0;
      if (mHDNEJ) {
        pPokEL = 1;
      }
      if (ipiMeH != pPokEL) {
        ipiMeH = pPokEL;
        this.KkEMiL.OomKnE();
        this.KkEMiL.dEbMEc();
        this.KkEMiL = new BLAZE.CbIDAm(
          "BilliardsRenderer",
          cmbjGA[0],
          cmbjGA[1],
          1,
          ipiMeH
        );
        this.KkEMiL.ILMNDn = true;
        this.KkEMiL.jkaFOn = false;
        this.KkEMiL.jfgmcH = false;
        this.KkEMiL.EEfbOm.GmKkeP = true;
      }
      this.ciNgdE();
      if (nHhEnP.length != 11) {
        $warn(64223638);
        return false;
      }
      nHhEnP[2] = oAhABg(nHhEnP[2]);
      nHhEnP[3] = oAhABg(nHhEnP[3]);
      nHhEnP[4] = oAhABg(nHhEnP[4]);
      nHhEnP[5] = oAhABg(nHhEnP[5]);
      nHhEnP[6] = oAhABg(nHhEnP[6]);
      nHhEnP[7] = oAhABg(nHhEnP[7]);
      this.fHCfBo = nHhEnP;
      this.Nfcipe = nHhEnP[5] == 1;
      this.edCPIA = nHhEnP[6] == 1;
      this.MjEImb(
        "standard",
        BLAZE.nHKIje.mbcAmA("bitmap", "billiards_default_cue"),
        this
      );
      this.HGpCdd = kEmakh;
      var dBcMeJ = this.HGpCdd.dBcMeJ;
      this.dbfCbJ = kEmakh.parentNode;
      if (!this.dbfCbJ) {
        $error(95882103);
        return;
      }
      this.ChiCPF = eCaHCJ.fMcHfj(this.dbfCbJ);
      this.ocBnBA = dBcMeJ.GameScoreboard;
      this.ImkhAe = dBcMeJ.GameArea;
      this.McFFpC = dBcMeJ.GameFullZone;
      this.eHDpeC = dBcMeJ.GameTable;
      this.EIefAg.dBcMeJ.table_super_game.classList.remove("AnimSuperGame");
      this.eHDpeC.appendChild(this.EIefAg);
      this.eHDpeC.appendChild(this.JFnPgF);
      this.KkEMiL.pHloPi(this.eHDpeC);
      this.eHDpeC.appendChild(this.hgenej);
      this.eHDpeC.appendChild(this.PFOljF);
      this.DMMJhj = eCaHCJ.fMcHfj(this.PFOljF);
      this.eIFOFn.FcjjJm = null;
      this.eIFOFn.gdLFmD = false;
      this.eIFOFn.classList.remove("deny");
      this.eIFOFn.nFBFbe = [0, 0];
      this.ijmngN.IPAlBM(cmbjGA, true);
      this.EIefAg.addEventListener("mousedown", this.BIjkDg, false);
      this.McFFpC.addEventListener("mousedown", this.BIjkDg, false);
      document.addEventListener("mouseup", this.dOOOAd, true);
      document.addEventListener("mousemove", this.noOoBo, true);
      this.EIefAg.addEventListener("touchstart", this.gjMFoL, false);
      document.addEventListener("touchend", this.aANONd, true);
      document.addEventListener("touchcancel", this.lbiekL, true);
      document.addEventListener("touchmove", this.plOmKH, true);
      this.HGpCdd.addEventListener("touchmove", this.bcMlmF, false);
      this.MNkbEB.addEventListener("mouseleave", this.MEnCDO, false);
      this.MNkbEB.addEventListener("mousedown", this.MlbIPJ, false);
      this.MNkbEB.addEventListener("touchstart", this.fjFBDc, false);
      this.oCJPLH(nHhEnP[7], nHhEnP[8], nHhEnP[9], nHhEnP[10], 0);
      this.ohiNnb = true;
      this.LfbLdL(0);
      BLAZE.DOeCfh.LGliOC(this, this.KkEMiL);
      return true;
    };
    kJfBld.prototype.GIfDAK = function () {
      if (!this.ijmngN) {
        $warn(59029918);
        return;
      }
      BLAZE.DOeCfh.eECaPp();
      this.LfbLdL(0);
      this.CjOjcD();
      this.JFhDhe();
      this.lEPfHC();
      this.ciNgdE();
      this.ohiNnb = false;
      if (this.HGpCdd) {
        this.HGpCdd.removeEventListener("touchmove", this.bcMlmF, false);
      }
      if (this.EIefAg) {
        this.EIefAg.removeEventListener("mousedown", this.BIjkDg, false);
        this.McFFpC.removeEventListener("mousedown", this.BIjkDg, false);
        document.removeEventListener("mouseup", this.dOOOAd, true);
        document.removeEventListener("mousemove", this.noOoBo, true);
        this.EIefAg.removeEventListener("touchstart", this.gjMFoL, false);
        document.removeEventListener("touchend", this.aANONd, true);
        document.removeEventListener("touchcancel", this.lbiekL, true);
        document.removeEventListener("touchmove", this.plOmKH, true);
        if (this.EIefAg.parentNode) {
          this.EIefAg.parentNode.removeChild(this.EIefAg);
        }
        this.EIefAg.dBcMeJ.table_super_game.classList.remove("AnimSuperGame");
      }
      if (this.MNkbEB) {
        this.MNkbEB.removeEventListener("mouseleave", this.MEnCDO, false);
        this.MNkbEB.removeEventListener("mousedown", this.MlbIPJ, false);
        this.MNkbEB.removeEventListener("touchstart", this.fjFBDc, false);
      }
      if (this.PFOljF) {
        if (this.PFOljF.parentNode) {
          this.PFOljF.parentNode.removeChild(this.PFOljF);
        }
      }
      if (this.hgenej) {
        if (this.hgenej.parentNode) {
          this.hgenej.parentNode.removeChild(this.hgenej);
        }
      }
      if (this.JFnPgF) {
        if (this.JFnPgF.parentNode) {
          this.JFnPgF.parentNode.removeChild(this.JFnPgF);
        }
      }
      if (this.KkEMiL) {
        this.KkEMiL.dEbMEc();
        this.KkEMiL.ccPIHB();
      }
      if (this.CgbpOO) {
        if (this.CgbpOO.parentNode) {
          this.CgbpOO.parentNode.removeChild(this.CgbpOO);
        }
      }
      this.HGpCdd = null;
      this.ocBnBA = null;
      this.ImkhAe = null;
      this.eHDpeC = null;
    };
    kJfBld.prototype.HeedgM = function () {
      this.GIfDAK();
      this.ijmngN = null;
      this.EIefAg = null;
      this.PFOljF = null;
      this.hgenej = null;
      this.JFnPgF = null;
      this.KkEMiL = null;
      this.eIFOFn = null;
      this.MNkbEB = null;
      this.CgbpOO = null;
      this.cjfpnD = null;
      this.CELFjd = null;
      BdGKkh.MgpPIb(this.lFDcfc, true);
      this.lFDcfc = null;
      this.fGCcNM = null;
      this.mlmAGe = null;
      this.CMkpOK = null;
      this.eNIHhC = null;
      this.BnoIaF = null;
      this.EHjCLJ = null;
    };
    kJfBld.prototype.ciNgdE = function () {
      this.lIKDEP = null;
      this.jNHelL = false;
      this.IaHPie = 0;
      this.fBlAOP = "";
      this.fHCfBo = null;
      this.Nfcipe = false;
      this.edCPIA = false;
      this.DglBmN = [];
      this.NcJIdp = [];
      this.inBIAD = null;
      this.CKjkNn = null;
      this.ELANMN = 1.0;
      this.cPHnOo = 0;
      this.cCaCnB = 0;
      this.hbGgcL = 0;
      this.ddLPpb = 0;
      this.kDHnLF = 0;
      this.lbjIfp = 0;
      this.dKFOLm = null;
      this.eGCDjK = null;
      this.CCKhkd = null;
      this.MEPbdm = null;
      this.CgaDOF = null;
      this.fdElLH = 0;
      this.LDjPhg = 0;
      this.kGpgAl = 0;
      this.cbkfNj = 0;
      this.FMCENE = "";
      this.egNOhn = [0, 0];
      this.NoNMFd = [0, 0];
      this.jfLcLF = [0, 0];
      this.nmoNPE = 0;
      this.kPJkNl = 0;
      this.LDjAoJ = LcgkhB;
      this.BMbpPO = 0;
      this.dgImkM = false;
      this.apGDjl = 0;
      this.nCpGLp = 0;
      this.kODmho = {};
      this.GPilDB = [0, 0];
      this.gFPnDb = false;
      this.JcfPNN = [0, 0];
      this.ganNEO = -1;
      this.feMpEJ = 0;
      this.nCIeej = false;
      this.hJfpGD = 0;
      this.dHAALl = 0;
      this.EcbJni = 0;
      this.kBJbiI = false;
      this.EJMEGi = false;
      this.PoBoEO = null;
      this.CLflLo = false;
      this.aklEOk = null;
      this.iaNNEe = null;
      this.kimBak = null;
      this.Aeccip = [];
      this.ocieMO = [];
      if (this.fGCcNM) {
        this.fGCcNM.style.display = "none";
      }
      if (this.CMkpOK) {
        this.CMkpOK.style.display = "none";
      }
      if (this.BnoIaF) {
        this.BnoIaF.style.display = "none";
      }
      this.GeeLHF = -1;
      this.AOCNnD = 0;
      this.PPNhdP = 0;
      this.LdmPeG = [];
      this.KdhOcg = {};
      this.BnkPBg = false;
    };
    kJfBld.prototype.iPJlAG = function (iOKbkM) {
      if (!this.ohiNnb) {
        return;
      }
      if (this.EIefAg) {
        var KlaNnm = this.EIefAg.dBcMeJ;
        KlaNnm.table_super_game_zp.innerHTML = iOKbkM + " ZP";
        KlaNnm.table_super_game.classList.add("AnimSuperGame");
      }
    };
    kJfBld.prototype.eEelho = function (PjGdcn) {
      if (!this.ohiNnb) {
        return;
      }
      var lkgcaO, GApkjE, CIkflk;
      this.ChiCPF = eCaHCJ.fMcHfj(this.dbfCbJ);
      this.DMMJhj = eCaHCJ.fMcHfj(this.PFOljF);
      var GmnjNl = PjGdcn[0] + "px";
      var ecLNjB = PjGdcn[1] + "px";
      this.ELANMN = PjGdcn[0] / cmbjGA[0];
      if (this.EIefAg) {
        this.EIefAg.style.width = GmnjNl;
        this.EIefAg.style.height = ecLNjB;
        var oGcCJn = Math.round(this.lbjIfp * this.ELANMN) + "px";
        lkgcaO = this.EIefAg.dBcMeJ.table_markers.style;
        lkgcaO.top = oGcCJn;
        lkgcaO.bottom = oGcCJn;
        lkgcaO.left = oGcCJn;
        lkgcaO.right = oGcCJn;
        lkgcaO = this.EIefAg.dBcMeJ.table_default_fabric.style;
        lkgcaO.top = oGcCJn;
        lkgcaO.bottom = oGcCJn;
        lkgcaO.left = oGcCJn;
        lkgcaO.right = oGcCJn;
        lkgcaO = this.EIefAg.dBcMeJ.table_fabric.style;
        lkgcaO.top = oGcCJn;
        lkgcaO.bottom = oGcCJn;
        lkgcaO.left = oGcCJn;
        lkgcaO.right = oGcCJn;
        lkgcaO = this.EIefAg.dBcMeJ.table_image.style;
        lkgcaO.top = oGcCJn;
        lkgcaO.bottom = oGcCJn;
        lkgcaO.left = oGcCJn;
        lkgcaO.right = oGcCJn;
      }
      if (this.KkEMiL) {
        this.KkEMiL.EEfbOm.style.width = GmnjNl;
        this.KkEMiL.EEfbOm.style.height = ecLNjB;
      }
      if (this.eIFOFn) {
        if (
          this.eIFOFn.FcjjJm &&
          this.eIFOFn.parentNode &&
          BLAZE.nHKIje.mbCOgG
        ) {
          this.aMjfMh(this.eIFOFn.FcjjJm);
        } else {
          this.bnoHoE(true, false);
        }
      }
      if (this.CgbpOO) {
        CIkflk = gAmDeK.GLomjE(oAefPK, this.ELANMN);
        gAmDeK.CoanLA(CIkflk);
        this.cjfpnD.style.width = CIkflk[0] + "px";
        this.cjfpnD.style.height = CIkflk[1] + "px";
        this.cjfpnD.style.left = -Math.round(CIkflk[0] * 0.5) + "px";
        if (this.hJfpGD > 0) {
          gAmDeK.ILFDaD(this.egNOhn, this.NoNMFd);
          this.lGpjEo(this.NoNMFd, this.dbfCbJ);
          gAmDeK.AFMEOb(this.NoNMFd, this.ChiCPF);
          this.CgbpOO.style.left = this.NoNMFd[0] + "px";
          this.CgbpOO.style.top = this.NoNMFd[1] + "px";
          this.kdMKBf();
          if (this.hJfpGD == 2) {
            this.dgImkM = true;
          }
        }
      }
      if (this.aklEOk) {
        this.CganCH(this.aklEOk, this.CLflLo);
      }
      if (this.iaNNEe) {
        this.LEajpf(this.iaNNEe);
      }
      this.filHGL();
      this.EmgCle();
      this.DbaPoA();
      BLAZE.DOeCfh.ECajkj(PjGdcn, this.ELANMN, this.kGpgAl);
    };
    kJfBld.prototype.bnoHoE = function (KfModc, MmPOLd) {
      var GApkjE,
        BanHbo,
        lkgcaO = this.eIFOFn.style;
      if (KfModc) {
        var CIkflk = BhDbjp;
        var JkalGG = 0;
        if (MmPOLd) {
          if (BLAZE.nHKIje.mbCOgG) {
            JkalGG = kAGnlM;
          }
        } else {
          if (BLAZE.nHKIje.mbCOgG) {
            JkalGG = HDfFId;
          }
        }
        if (JkalGG < this.ELANMN) {
          JkalGG = this.ELANMN;
        }
        CIkflk = heeNHP.CoanLA(CIkflk * JkalGG);
        GApkjE = CIkflk + "px";
        lkgcaO.width = GApkjE;
        lkgcaO.height = GApkjE;
        GApkjE = heeNHP.CoanLA(CIkflk * -0.5) + "px";
        lkgcaO.margin = GApkjE + " 0 0 " + GApkjE;
      }
      if (!this.eIFOFn.FcjjJm) {
        return;
      }
      GApkjE = gAmDeK.hhcCkm(this.eIFOFn.nFBFbe);
      this.CPFcMg(GApkjE);
      if (this.Aobgbn(this.eIFOFn.FcjjJm[4], this.eIFOFn.FcjjJm[1], GApkjE)) {
        if (this.eIFOFn.gdLFmD) {
          this.eIFOFn.gdLFmD = false;
          this.eIFOFn.classList.remove("deny");
        }
      } else {
        if (!this.eIFOFn.gdLFmD) {
          this.eIFOFn.gdLFmD = true;
          this.eIFOFn.classList.add("deny");
        }
      }
      this.lGpjEo(GApkjE);
      BanHbo = gAmDeK.kbKEhc(GApkjE, this.ChiCPF);
      lkgcaO.left = BanHbo[0] + "px";
      lkgcaO.top = BanHbo[1] + "px";
    };
    kJfBld.prototype.jlKNfn = function () {
      var FcjjJm = this.eIFOFn.FcjjJm;
      if (!FcjjJm) {
        return;
      }
      var GApkjE = gAmDeK.hhcCkm(this.eIFOFn.nFBFbe);
      this.CPFcMg(GApkjE);
      if (!this.Aobgbn(FcjjJm[4], FcjjJm[1], GApkjE)) {
        if (BLAZE.nHKIje.mbCOgG) {
          this.aMjfMh(FcjjJm);
          this.bnoHoE(true, false);
        }
        return;
      }
      this.CjOjcD();
      var DeDKln = this.MoNgbl(FcjjJm[1]);
      if (!DeDKln) {
        return;
      }
      gAmDeK.ILFDaD(GApkjE, DeDKln[2]);
      this.DKbhJP(DeDKln);
      this.KkEMiL.BeDIGn();
      this.ijmngN.KPeAhF({
        c: "plc",
        v: [
          DeDKln[0],
          pBEPNj.lNAdKJ(DeDKln[2][0], 0),
          pBEPNj.lNAdKJ(DeDKln[2][1], 0),
        ].join(":"),
      });
      this.FmDnpD(FcjjJm[1], FcjjJm[2], FcjjJm[3], false);
    };
    kJfBld.prototype.heHAOb = function () {
      if (!this.eIFOFn.FcjjJm) {
        return;
      }
      gAmDeK.ILFDaD(this.GPilDB, this.eIFOFn.nFBFbe);
      this.bnoHoE(true, true);
    };
    kJfBld.prototype.aMjfMh = function (FcjjJm) {
      if (!FcjjJm) {
        $warn(57990285);
        return;
      }
      FcjjJm[1] = oAhABg(FcjjJm[1]);
      FcjjJm[2] = oAhABg(FcjjJm[2]);
      FcjjJm[3] = oAhABg(FcjjJm[3]);
      FcjjJm[4] = oAhABg(FcjjJm[4]);
      if (this.eIFOFn.gdLFmD) {
        this.eIFOFn.gdLFmD = false;
        this.eIFOFn.classList.remove("deny");
      }
      this.eIFOFn.FcjjJm = FcjjJm;
      this.dbfCbJ.appendChild(this.eIFOFn);
      if (BLAZE.nHKIje.mbCOgG) {
        var DeDKln = this.MoNgbl(FcjjJm[1]);
        if (DeDKln) {
          gAmDeK.ILFDaD(DeDKln[2], this.eIFOFn.nFBFbe);
          this.lGpjEo(this.eIFOFn.nFBFbe);
        }
      } else {
        gAmDeK.ILFDaD(this.GPilDB, this.eIFOFn.nFBFbe);
      }
      this.bnoHoE(false, false);
    };
    kJfBld.prototype.CjOjcD = function () {
      if (this.eIFOFn) {
        if (this.eIFOFn.FcjjJm || this.eIFOFn.parentNode) {
          this.bnoHoE(true, false);
          this.eIFOFn.FcjjJm = null;
          this.eIFOFn.gdLFmD = false;
          this.eIFOFn.classList.remove("deny");
          if (this.eIFOFn.parentNode) {
            this.eIFOFn.parentNode.removeChild(this.eIFOFn);
          }
        }
      }
    };
    kJfBld.prototype.Aobgbn = function (pbDble, HIpEpl, nFBFbe) {
      if (pbDble == 2) {
        PPDOLM.efnooG(this.dKFOLm.HALPNJ, nFBFbe);
        dlAeph = this.dKFOLm.jfdmpN[0];
        fPcAaE = this.dKFOLm.jfdmpN[1];
        if (dlAeph[0] == fPcAaE[0]) {
          if (nFBFbe[0] < dlAeph[0]) {
            nFBFbe[0] = dlAeph[0];
          }
        } else {
          if (nFBFbe[1] < dlAeph[1]) {
            nFBFbe[1] = dlAeph[1];
          }
        }
        var JeMEGB = gAmDeK.hdEOjG(dlAeph, nFBFbe);
        if (JeMEGB > this.dKFOLm.jfdmpN[2]) {
          var IciLMj = gAmDeK.kbKEhc(nFBFbe, dlAeph);
          gAmDeK.hhEDfj(IciLMj);
          gAmDeK.KmKpcl(IciLMj, this.dKFOLm.jfdmpN[2] - FBGiBD);
          IciLMj = gAmDeK.ADJoEM(dlAeph, IciLMj);
          gAmDeK.CoanLA(IciLMj);
          gAmDeK.ILFDaD(IciLMj, nFBFbe);
        }
      } else if (pbDble == 1) {
        PPDOLM.efnooG(this.dKFOLm.kGglbf, nFBFbe);
      } else {
        PPDOLM.efnooG(this.dKFOLm.HALPNJ, nFBFbe);
      }
      var jeDhOK = this.kGpgAl + JjCcIh;
      var nJikla,
        MNehDp = this.LdmPeG.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        EKClpk = this.LdmPeG[nJikla];
        if (EKClpk[0] != HIpEpl) {
          if (EKClpk[1]) {
            if (gAmDeK.hdEOjG(nFBFbe, EKClpk[2]) < jeDhOK) {
              return false;
            }
          }
        }
      }
      return true;
    };
    kJfBld.prototype.efoilB = function (FcjjJm) {
      if (!FcjjJm) {
        return;
      }
      this.jNHelL = false;
      this.lIKDEP = FcjjJm;
      this.lIKDEP.dHNdGJ = 0;
      window.setTimeout(this.OLhApP, 500, this);
    };
    kJfBld.prototype.lBgbNP = function () {
      if (!this.lIKDEP) {
        return;
      }
      this.ijmngN.aCCjfA();
      this.jNHelL = false;
      this.lIKDEP.dHNdGJ = 0;
      this.EGKkOn();
    };
    kJfBld.prototype.ecPihA = function () {
      if (!this.lIKDEP) {
        return;
      }
      if (this.lIKDEP.dHNdGJ >= this.lIKDEP.NPlCCd.length - 1) {
        return;
      }
      this.jNHelL = true;
      this.ijmngN.OjmHEh();
      this.ijmngN.KNilPi();
      this.ijmngN.pHlLKH();
    };
    kJfBld.prototype.FKFMmF = function () {
      if (!this.lIKDEP) {
        return;
      }
      this.jNHelL = false;
      this.ijmngN.AoPlEI();
      if (!this.BnkPBg && !this.EJMEGi) {
        this.EGKkOn();
      }
    };
    kJfBld.prototype.OLhApP = function (CdBicM) {
      if (!CdBicM.lIKDEP || !CdBicM.ohiNnb) {
        return;
      }
      CdBicM.EGKkOn();
    };
    kJfBld.prototype.EGKkOn = function () {
      if (!this.ohiNnb) {
        return;
      }
      var GApkjE, lkgcaO, FcjjJm, Kllakj;
      var bNpjMK = false;
      if (this.DglBmN.length > 0) {
        FcjjJm = this.DglBmN.shift();
        Kllakj = FcjjJm[0];
        if (Kllakj != "q") {
          this.LfbLdL(0);
          this.CjOjcD();
        }
        if (Kllakj == "i") {
          this.fBlAOP = FcjjJm[1];
          this.nFmDJK(this.fBlAOP);
          this.ijmngN.KpnddA();
          this.lEPfHC();
          bNpjMK = true;
        } else if (Kllakj == "z") {
          this.dfLGCP();
        } else if (Kllakj == "s") {
          FcjjJm.shift();
          this.aJijiE(FcjjJm);
        } else if (Kllakj == "a") {
          this.FmDnpD(
            oAhABg(FcjjJm[1]),
            oAhABg(FcjjJm[2]),
            oAhABg(FcjjJm[3]),
            false
          );
        } else if (Kllakj == "b") {
          this.aMjfMh(FcjjJm);
        } else if (Kllakj == "c") {
          this.bjKIHP(FcjjJm);
        } else if (Kllakj == "r") {
          this.FmDnpD(oAhABg(FcjjJm[1]), oAhABg(FcjjJm[2]), 0, true);
        } else if (Kllakj == "u") {
          GApkjE = oAhABg(FcjjJm[1]);
          var DeDKln = this.MoNgbl(GApkjE);
          if (DeDKln) {
            var ecMoLj = DeDKln[6];
            var ifECaD = DeDKln[7];
            DeDKln[1] = 1;
            ecMoLj.kpHbnJ = [1, 1];
            ecMoLj.GGkPfl = 1;
            ifECaD.GGkPfl = 1;
            DeDKln[3][0] = 0;
            DeDKln[3][1] = 0;
            DeDKln[5] = 0;
            if (DeDKln[8]) {
              DeDKln[8].GGkPfl = 1;
            }
            DeDKln[9] = 0;
            DeDKln[10] = 0;
            DeDKln[11] = null;
            EKClpk[2][0] = pBEPNj.AiaDbo(FcjjJm[3]);
            EKClpk[2][1] = pBEPNj.AiaDbo(FcjjJm[4]);
            this.DKbhJP(EKClpk);
            this.KkEMiL.BeDIGn();
          }
          this.FmDnpD(GApkjE, oAhABg(FcjjJm[2]), 0, true);
        } else if (Kllakj == "q") {
          if (this.hJfpGD == 2) {
            this.nCpGLp = heeNHP.mjKDio(heeNHP.fNknbG(oAhABg(FcjjJm[1]) * 0.1));
            this.dgImkM = true;
          }
        } else if (Kllakj == "p") {
          this.naalNm(
            oAhABg(FcjjJm[1]),
            [oAhABg(FcjjJm[4]), oAhABg(FcjjJm[5])],
            [oAhABg(FcjjJm[6]), oAhABg(FcjjJm[7]), oAhABg(FcjjJm[8])],
            oAhABg(FcjjJm[2]),
            oAhABg(FcjjJm[3]),
            2
          );
        } else if (Kllakj == "n") {
          GApkjE = null;
          if (FcjjJm[3] != "") {
            GApkjE = FcjjJm[3].split(";");
          }
          lkgcaO = null;
          if (FcjjJm[4] != "") {
            lkgcaO = FcjjJm[4].split(";");
          }
          this.nbhCHg(oAhABg(FcjjJm[1]), oAhABg(FcjjJm[2]), GApkjE, lkgcaO);
        } else {
          $warn("GC " + Kllakj);
        }
      }
      if (this.NcJIdp.length > 0 && !bNpjMK) {
        this.ijmngN.aCCjfA();
        var gPbjeM = this.NcJIdp.shift();
        var cGLImA = heeNHP.NgJdlP(ALDPFj() - gPbjeM[0]);
        FcjjJm = gPbjeM[1];
        var ninAcH = FcjjJm.length;
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          GApkjE = FcjjJm[nJikla].split("#");
          Kllakj = GApkjE[0];
          if (Kllakj == "p") {
            if (GApkjE.length < 4) {
              this.ijmngN.CLhPIl(
                GApkjE[1],
                gfKdjj("computer_player"),
                GApkjE[3]
              );
            } else {
              this.ijmngN.CLhPIl(GApkjE[1], GApkjE[2], GApkjE[3]);
            }
          } else if (Kllakj == "s") {
            this.ijmngN.mGENpC(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "i") {
            this.ijmngN.GlccOi(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "h") {
            this.ijmngN.Fmfanl(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "j") {
            this.ijmngN.jKGJcp(GApkjE[1], GApkjE[2]);
          } else if (Kllakj == "c") {
            this.ijmngN.FhKkhP(GApkjE[1]);
          } else if (Kllakj == "t") {
            this.ijmngN.BbIcIh(oAhABg(GApkjE[1]) + cGLImA, GApkjE[2]);
          } else if (Kllakj == "e") {
            this.ijmngN.ANjAml(GApkjE[1]);
          } else if (Kllakj == "r") {
            this.ijmngN.CPiinh(GApkjE[1], oAhABg(GApkjE[2]) + cGLImA);
          } else if (Kllakj == "w") {
            this.ijmngN.pHlLKH();
            this.LfbLdL(0);
            this.CjOjcD();
            this.ijmngN.NblciE(
              GApkjE[1],
              GApkjE[2],
              GApkjE[3],
              GApkjE[4],
              GApkjE[5],
              GApkjE[6]
            );
          } else if (Kllakj == "b") {
            if (GApkjE.length < 2) {
              this.CganCH(null, false);
            } else {
              this.CganCH(GApkjE[1].split(";"), false);
            }
          } else if (Kllakj == "k") {
            this.LEajpf(GApkjE[1].split(";"));
          } else if (Kllakj == "o") {
            this.lEPfHC();
          } else if (Kllakj == "v") {
            this.ijmngN.pMgBMk();
            var pIilIH = GApkjE.length;
            for (var PCFaJc = 1; PCFaJc < pIilIH; PCFaJc++) {
              this.ijmngN.hKadpl(GApkjE[PCFaJc]);
            }
          } else if (Kllakj == "l") {
            this.ijmngN.hKadpl(GApkjE[1]);
          } else {
            $warn("IC " + Kllakj);
          }
        }
      }
      if (this.DglBmN.length > 0 || this.NcJIdp.length > 0) {
        this.EGKkOn();
      } else if (this.lIKDEP) {
        if (!this.BnkPBg && !this.EJMEGi && !this.jNHelL) {
          var dHNdGJ = this.lIKDEP.dHNdGJ;
          var NPlCCd = this.lIKDEP.NPlCCd;
          if (dHNdGJ < NPlCCd.length) {
            var kiPjJb = NPlCCd[dHNdGJ];
            dHNdGJ = dHNdGJ + 1;
            this.lIKDEP.dHNdGJ = dHNdGJ;
            this.hcLEeN(kiPjJb);
          } else {
            this.ijmngN.AoPlEI();
          }
        }
      }
    };
    kJfBld.prototype.hcLEeN = function (JcLoBg) {
      if (!this.ohiNnb) {
        return;
      }
      if (!JcLoBg) {
        return;
      }
      if (JcLoBg.hasOwnProperty("gcn")) {
        this.ijmngN.lBhdbN();
      }
      if (JcLoBg.hasOwnProperty("cpi")) {
        this.lPdHHA.dDDJLB = oAhABg(JcLoBg["cpi"]);
      }
      var jCACbJ = false;
      if (JcLoBg.hasOwnProperty("gv")) {
        jCACbJ = true;
        var NGhcmm = String(JcLoBg.gv).split("|");
        var ninAcH = NGhcmm.length;
        for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
          var fefOLc = NGhcmm[nJikla].split("#");
          var DmMGAD = fefOLc[0];
          if (DmMGAD == "z" || DmMGAD == "s") {
            var EIeDfL = null;
            var LoJBif = this.DglBmN.length;
            if (LoJBif > 0) {
              LoJBif--;
              if (this.DglBmN[LoJBif][0] == "i") {
                EIeDfL = this.DglBmN[LoJBif];
              }
            }
            this.DglBmN = [fefOLc];
            if (EIeDfL) {
              this.DglBmN.unshift(EIeDfL);
            }
          } else {
            this.DglBmN.push(fefOLc);
          }
        }
      }
      if (JcLoBg.hasOwnProperty("gs")) {
        jCACbJ = true;
        this.NcJIdp.push([ALDPFj(), String(JcLoBg.gs).split("|")]);
      }
      if (!this.BnkPBg && jCACbJ) {
        this.EGKkOn();
      }
    };
    kJfBld.prototype.lKNOFa = function (fIjFDB) {
      if (!this.ohiNnb) {
        return;
      }
      if (this.feMpEJ > 0) {
        this.feMpEJ = 0;
      }
      if (this.BnkPBg) {
        this.FhccEN();
      } else if (this.hJfpGD == 1) {
        this.BMbpPO = gAmDeK.jCckph(this.NoNMFd, this.jfLcLF);
        eCaHCJ.boAoLO(this.CgbpOO, this.BMbpPO);
        this.EKOHoP();
        if (this.kBJbiI) {
          this.nmoNPE = this.nmoNPE + this.LDjAoJ * BLAZE.nJcHkO.PjCOjo;
          if (this.nmoNPE > 1) {
            this.nmoNPE = 1;
            this.LDjAoJ = -this.LDjAoJ;
          } else if (this.nmoNPE <= 0) {
            this.nmoNPE = 0;
            this.LDjAoJ = -this.LDjAoJ;
          }
          this.kdMKBf();
        }
      } else if (this.hJfpGD == 2) {
        if (this.dgImkM) {
          PMhlDk = this.nCpGLp;
          if (this.eHDpeC.pgnpck) {
            PMhlDk = heeNHP.NieOjo(PMhlDk + heeNHP.EmhGoa);
          }
          IjBnIK = heeNHP.NieOjo(PMhlDk - this.apGDjl);
          if (Math.abs(IjBnIK) < ocIDFJ) {
            this.dgImkM = false;
            this.apGDjl = PMhlDk;
          } else {
            IjBnIK = IjBnIK * 0.1;
            if (IjBnIK > 0) {
              if (IjBnIK < ocIDFJ) {
                IjBnIK = ocIDFJ;
              }
            } else {
              if (IjBnIK > -ocIDFJ) {
                IjBnIK = -ocIDFJ;
              }
            }
            this.apGDjl = heeNHP.NieOjo(this.apGDjl + IjBnIK);
          }
          eCaHCJ.boAoLO(this.CgbpOO, this.apGDjl);
        }
      }
      if (BLAZE.DOeCfh.ImbmNJ(fIjFDB)) {
        if (!this.BnkPBg) {
          this.KkEMiL.BeDIGn();
        }
      }
    };
    kJfBld.prototype.CcCDGj = function () {
      if (this.Nfcipe && this.lPdHHA.iLFnOJ) {
        return true;
      }
      return false;
    };
    kJfBld.prototype.filHGL = function () {
      if (!this.KJoNca) {
        return;
      }
      this.fGCcNM.style.display = "none";
      this.CMkpOK.style.display = "none";
      this.BnoIaF.style.display = "none";
      this.KJoNca = false;
    };

    kJfBld.prototype.GojNPc = function () {
      var AIcDpC = 0;
      if (this.CcCDGj()) {
        AIcDpC = 2;
        if (this.lPdHHA.hKEffH) {
          AIcDpC = 3;
        }
      } else if (BLAZE.nHKIje.mbCOgG && this.lPdHHA.iLFnOJ) {
        AIcDpC = 1;
      }
      if (AIcDpC == 0) {
        AIcDpC = 3;
      }
      dlAeph = gAmDeK.hhcCkm(this.egNOhn);
      fPcAaE = gAmDeK.hhcCkm(this.GPilDB);
      this.CPFcMg(fPcAaE);
      FIDfCN = gAmDeK.kbKEhc(fPcAaE, dlAeph);
      PMhlDk = heeNHP.CoanLA((gAmDeK.LPNBNn(FIDfCN) / FBGiBD) * this.ELANMN);
      gAmDeK.hhEDfj(FIDfCN);
      if (BLAZE.nHKIje.mbCOgG) {
        fPcAaE = gAmDeK.GLomjE(FIDfCN, 20000000);
        gAmDeK.dobFPC(fPcAaE, dlAeph);
      }
      fcBlmE = [0];
      if (AIcDpC == 1) {
        JipEnK = true;
      } else {
        EhiGJm = gAmDeK.hdEOjG(dlAeph, fPcAaE);
        EeEcdE = this.MEPbdm.length - 1;
        for (NNpOHi = 0; NNpOHi < EeEcdE; NNpOHi++) {
          HKlKeD = this.JJdNoi(
            dlAeph,
            fPcAaE,
            this.MEPbdm[NNpOHi],
            this.MEPbdm[NNpOHi + 1]
          );
          if (HKlKeD) {
            MCNlab = gAmDeK.hdEOjG(dlAeph, HKlKeD);
            if (MCNlab < 0) {
              MCNlab = 0;
            }
            if (EhiGJm > MCNlab) {
              EhiGJm = MCNlab;
              fcBlmE[0] = 1;
              fcBlmE[1] = this.MEPbdm[NNpOHi];
              fcBlmE[2] = this.MEPbdm[NNpOHi + 1];
              fcBlmE[3] = MCNlab;
              fcBlmE[4] = HKlKeD;
              fcBlmE[5] = NNpOHi;
            }
          }
        }
        if (AIcDpC == 3) {
          var DeDKln = this.MoNgbl(this.cbkfNj);
          aBLojO = DeDKln[2];
          ONBddG = EhiGJm;
          igLkIf = gAmDeK.GLomjE(FIDfCN, ONBddG);
          FmpDmn = gAmDeK.ADJoEM(aBLojO, igLkIf);
          MopFdB = this.LdmPeG;
          gALocH = MopFdB.length;
          for (IjBnIK = 0; IjBnIK < gALocH; IjBnIK++) {
            hLGdKD = MopFdB[IjBnIK];
            if (hLGdKD[1]) {
              if (hLGdKD[0] != this.cbkfNj) {
                kmaGGH = this.ahMjFp(
                  EhiGJm,
                  aBLojO,
                  FmpDmn,
                  igLkIf,
                  ONBddG,
                  hLGdKD[2],
                  hLGdKD[3]
                );
                if (kmaGGH) {
                  EhiGJm = kmaGGH[0];
                  fcBlmE[0] = 2;
                  fcBlmE[1] = kmaGGH;
                  fcBlmE[2] = hLGdKD;
                }
              }
            }
          }
        }
        JipEnK = true;
        if (fcBlmE[0] == 2) {
          kmaGGH = fcBlmE[1];
          fPcAaE = gAmDeK.hhcCkm(kmaGGH[1]);
          FIDfCN = gAmDeK.kbKEhc(fPcAaE, dlAeph);
          PMhlDk = heeNHP.CoanLA(
            (gAmDeK.LPNBNn(FIDfCN) / FBGiBD) * this.ELANMN
          );
          gAmDeK.hhEDfj(FIDfCN);
          gAmDeK.KmKpcl(FIDfCN, FBGiBD);
          JipEnK = false;

          lplcPg = this.fGCcNM.style;
          lplcPg.display = "";
          this.fgjdEE(dlAeph);
          gAmDeK.AFMEOb(dlAeph, this.DMMJhj);
          gAmDeK.CoanLA(dlAeph);
          lplcPg.left = dlAeph[0] + "px";
          lplcPg.top = dlAeph[1] + "px";
          this.mlmAGe.style.width = PMhlDk + "px";
          eCaHCJ.boAoLO(this.fGCcNM, gAmDeK.BMHheE(FIDfCN));

          lplcPg = this.CMkpOK.style;
          lplcPg.display = "";
          this.fgjdEE(fPcAaE);
          gAmDeK.AFMEOb(fPcAaE, this.DMMJhj);
          gAmDeK.CoanLA(fPcAaE);
          lplcPg.left = fPcAaE[0] + "px";
          lplcPg.top = fPcAaE[1] + "px";
          fmlfgp = kmaGGH[2];
          BAOOEO = heeNHP.CoanLA(gAmDeK.LPNBNn(fmlfgp));
          BAOOEO = 400000000;
          this.eNIHhC.style.width =
            heeNHP.CoanLA((BAOOEO / ONBddG) * 300 * this.ELANMN) + "px";
          eCaHCJ.boAoLO(this.CMkpOK, gAmDeK.BMHheE(fmlfgp));

          lplcPg = this.BnoIaF.style;
          lplcPg.display = "";
          hLGdKD = fcBlmE[2];
          fPcAaE = gAmDeK.hhcCkm(hLGdKD[2]);
          this.fgjdEE(fPcAaE);
          gAmDeK.AFMEOb(fPcAaE, this.DMMJhj);
          gAmDeK.CoanLA(fPcAaE);
          lplcPg.left = fPcAaE[0] + "px";
          lplcPg.top = fPcAaE[1] + "px";
          fmlfgp = kmaGGH[3];
          BAOOEO = heeNHP.CoanLA(gAmDeK.LPNBNn(fmlfgp));
          BAOOEO = 400000000;
          this.EHjCLJ.style.width =
            heeNHP.CoanLA((BAOOEO / ONBddG) * 300 * this.ELANMN) + "px";
          eCaHCJ.boAoLO(this.BnoIaF, gAmDeK.BMHheE(fmlfgp));
        } else if (fcBlmE[0] > 0) {
          this.BnoIaF.style.display = "none";
          fPcAaE = fcBlmE[4];
          if (fcBlmE[1][2] == 0 || fcBlmE[1][2] == null) {
            FIDfCN = gAmDeK.kbKEhc(fPcAaE, dlAeph);
            PMhlDk = heeNHP.CoanLA(
              (gAmDeK.LPNBNn(FIDfCN) / FBGiBD) * this.ELANMN
            );
            gAmDeK.hhEDfj(FIDfCN);
            gAmDeK.KmKpcl(FIDfCN, FBGiBD);
            fmlfgp = this.fifbbg(FIDfCN, fcBlmE[1], fcBlmE[2]);
            PcccbF = gAmDeK.GLomjE(fmlfgp, gbgEGp[0] * 2);
            gAmDeK.dobFPC(PcccbF, fPcAaE);
            lplcPg = fcBlmE[5];
            EhiGJm = 99999999;
            HILbHF = null;
            for (NNpOHi = 0; NNpOHi < EeEcdE; NNpOHi++) {
              if (NNpOHi != lplcPg) {
                HKlKeD = this.JJdNoi(
                  fPcAaE,
                  PcccbF,
                  this.MEPbdm[NNpOHi],
                  this.MEPbdm[NNpOHi + 1]
                );
                if (HKlKeD) {
                  MCNlab = gAmDeK.hdEOjG(fPcAaE, HKlKeD);
                  if (MCNlab < 0) {
                    MCNlab = 0;
                  }
                  if (EhiGJm > MCNlab) {
                    EhiGJm = MCNlab;
                    HILbHF = HKlKeD;
                  }
                }
              }
            }
            if (HILbHF) {
              JipEnK = false;
              lplcPg = this.fGCcNM.style;
              lplcPg.display = "";
              this.fgjdEE(dlAeph);
              gAmDeK.AFMEOb(dlAeph, this.DMMJhj);
              gAmDeK.CoanLA(dlAeph);
              lplcPg.left = dlAeph[0] + "px";
              lplcPg.top = dlAeph[1] + "px";
              this.mlmAGe.style.width = PMhlDk + "px";
              eCaHCJ.boAoLO(this.fGCcNM, gAmDeK.BMHheE(FIDfCN));
              lplcPg = this.CMkpOK.style;
              lplcPg.display = "";
              this.fgjdEE(fPcAaE);
              gAmDeK.AFMEOb(fPcAaE, this.DMMJhj);
              gAmDeK.CoanLA(fPcAaE);
              lplcPg.left = fPcAaE[0] + "px";
              lplcPg.top = fPcAaE[1] + "px";
              this.eNIHhC.style.width =
                heeNHP.CoanLA((EhiGJm / FBGiBD) * this.ELANMN) + "px";
              eCaHCJ.boAoLO(this.CMkpOK, gAmDeK.BMHheE(fmlfgp));
            }
          }
        }
      }
      if (JipEnK) {
        this.CMkpOK.style.display = "none";
        this.BnoIaF.style.display = "none";
        gAmDeK.KmKpcl(FIDfCN, FBGiBD);
        lplcPg = this.fGCcNM.style;
        lplcPg.display = "";
        this.fgjdEE(dlAeph);
        gAmDeK.AFMEOb(dlAeph, this.DMMJhj);
        gAmDeK.CoanLA(dlAeph);
        lplcPg.left = dlAeph[0] + "px";
        lplcPg.top = dlAeph[1] + "px";
        this.mlmAGe.style.width = PMhlDk + "px";
        eCaHCJ.boAoLO(this.fGCcNM, gAmDeK.BMHheE(FIDfCN));
      }
      this.KJoNca = true;
    };

    kJfBld.prototype.FmDnpD = function (BfAgjC, enPdMi, jeCmLK, fgIcEE) {
      if (!this.nCIeej) {
        if (!BLAZE.nHKIje.fKjIAA()) {
          this.ohiNnb = false;
          this.HGpCdd = null;
          BLAZE.global.gs.cqi();
          return;
        }
        this.nCIeej = true;
      }
      if (!this.ohiNnb) {
        return;
      }
      if (!this.CgbpOO) {
        return;
      }
      if (!this.CgbpOO.parentNode) {
        this.dbfCbJ.appendChild(this.CgbpOO);
      }
      if (jeCmLK >= 0) {
        BLAZE.DOeCfh.jOOHLE(jeCmLK);
      }
      this.dHAALl = 0;
      this.EcbJni = -1;
      this.EJMEGi = false;
      this.BnkPBg = false;
      this.kBJbiI = false;
      BfAgjC = oAhABg(BfAgjC);
      EKClpk = this.MoNgbl(BfAgjC);
      if (!EKClpk) {
        return;
      }
      if (!EKClpk[1]) {
        return;
      }
      this.cbkfNj = BfAgjC;
      this.cjfpnD.style.top = heeNHP.CoanLA(this.ELANMN * PPJLKm) + "px";
      this.nmoNPE = 0;
      this.LDjAoJ = LcgkhB;
      this.egNOhn = gAmDeK.hhcCkm(EKClpk[2]);
      gAmDeK.ILFDaD(this.egNOhn, this.NoNMFd);
      this.lGpjEo(this.NoNMFd, this.dbfCbJ);
      gAmDeK.AFMEOb(this.NoNMFd, this.ChiCPF);
      this.CgbpOO.style.left = this.NoNMFd[0] + "px";
      this.CgbpOO.style.top = this.NoNMFd[1] + "px";
      if (fgIcEE) {
        this.hJfpGD = 2;
      } else {
        this.hJfpGD = 1;
        this.dHAALl = ALDPFj();
        this.MhjMpC();
        this.HOioJb();
        this.jKJgpI();
        this.GojNPc();
      }
      this.apGDjl = gAmDeK.jCckph(this.NoNMFd, this.jfLcLF);
      eCaHCJ.boAoLO(this.CgbpOO, this.apGDjl);
      enPdMi = oAhABg(enPdMi);
      if (enPdMi >= 0) {
        var CjGlJF = "";
        var MKlHMh, JPCJka;
        if (enPdMi < 100) {
          MKlHMh = "cue" + enPdMi;
        } else if (enPdMi < 1000) {
          enPdMi -= 100;
          MKlHMh = "pcue" + enPdMi;
        } else {
          enPdMi -= 1000;
          MKlHMh = "acue" + enPdMi;
        }
        if (this.FMCENE == MKlHMh) {
          if (MKlHMh.substring(0, 4) == "acue") {
            this.CELFjd.classList.add("sprite");
            JPCJka = Jbelce[enPdMi];
            this.lFDcfc.style.top = JPCJka[0] + "%";
            this.lFDcfc.style.bottom = 100 - JPCJka[0] - 50 + "%";
            BdGKkh.mmLpgC(this.lFDcfc, JPCJka[3], JPCJka[1], JPCJka[2]);
          }
        } else {
          var pjbpkC = false;
          if (enPdMi == 0) {
            CjGlJF = this.kODmho.standard;
          } else {
            this.FMCENE = "";
            if (this.kODmho[MKlHMh]) {
              CjGlJF = this.kODmho[MKlHMh];
            } else {
              BLAZE.nHKIje.LepiMi(
                MKlHMh,
                lDkhIC + MKlHMh + ".png?" + BLAZE.CONTENT_VERSION,
                1,
                this.MjEImb,
                this
              );
              if (this.kODmho[MKlHMh]) {
                CjGlJF = this.kODmho[MKlHMh];
              } else {
                CjGlJF = this.kODmho.standard;
                pjbpkC = true;
              }
            }
          }
          this.FMCENE = MKlHMh;
          this.CELFjd.style.backgroundImage = CjGlJF;
          if (MKlHMh.substring(0, 4) == "acue" && !pjbpkC) {
            this.CELFjd.classList.add("sprite");
            this.lFDcfc.style.backgroundImage = CjGlJF;
            JPCJka = Jbelce[enPdMi];
            this.lFDcfc.style.top = JPCJka[0] + "%";
            this.lFDcfc.style.bottom = 100 - JPCJka[0] - 50 + "%";
            BdGKkh.mmLpgC(this.lFDcfc, JPCJka[3], JPCJka[1], JPCJka[2]);
          } else {
            this.CELFjd.classList.remove("sprite");
            this.lFDcfc.style.backgroundImage = "";
            BdGKkh.MgpPIb(this.lFDcfc, true);
          }
        }
      }
    };
    kJfBld.prototype.LfbLdL = function (nPnINo) {
      if (!this.ohiNnb) {
        return;
      }
      this.ODbnaC();
      this.bHjekd();
      this.filHGL();
      this.hJfpGD = 0;
      this.dHAALl = 0;
      this.EcbJni = -1;
      this.kBJbiI = false;
      if (!this.CgbpOO) {
        return;
      }
      if (this.CgbpOO.parentNode) {
        nPnINo = oAhABg(nPnINo);
        if (nPnINo > 0) {
          window.setTimeout(this.DNeacd, nPnINo, this);
        } else {
          BdGKkh.MgpPIb(this.lFDcfc, true);
          this.CgbpOO.parentNode.removeChild(this.CgbpOO);
        }
      }
    };
    kJfBld.prototype.DNeacd = function (CdBicM) {
      if (CdBicM) {
        if (CdBicM.CgbpOO.parentNode && CdBicM.hJfpGD == 0) {
          BdGKkh.MgpPIb(CdBicM.lFDcfc, true);
          CdBicM.CgbpOO.parentNode.removeChild(CdBicM.CgbpOO);
        }
      }
    };
    kJfBld.prototype.EKOHoP = function (PFPDDa) {
      if (this.hJfpGD != 1 || !this.lPdHHA.EAflFm) {
        return;
      }
      var GApkjE = heeNHP.CoanLA(
        heeNHP.fNknbG(heeNHP.iJCika(this.BMbpPO)) * 10
      );
      if (Math.abs(this.EcbJni - GApkjE) < 20) {
        return;
      }
      var PKJdOp = BLAZE.nJcHkO.DBGlpP;
      if (PKJdOp - this.dHAALl > GBiBjO) {
        this.dHAALl = PKJdOp;
        this.EcbJni = GApkjE;
        this.ijmngN.KPeAhF({
          c: "q",
          v: GApkjE,
        });
      }
    };
    kJfBld.prototype.kdMKBf = function () {
      if (!this.CgbpOO) {
        return;
      }
      this.cjfpnD.style.top =
        heeNHP.CoanLA(this.ELANMN * (PPJLKm + this.nmoNPE * bGLjeH)) + "px";
    };
    kJfBld.prototype.jKJgpI = function () {
      gAmDeK.ILFDaD(this.GPilDB, this.jfLcLF);
      gAmDeK.AFMEOb(this.jfLcLF, this.ChiCPF);
      gAmDeK.CoanLA(this.jfLcLF);
    };
    kJfBld.prototype.MhjMpC = function () {
      if (this.JcfPNN[0] != 0 || this.JcfPNN[1] != 0 || this.ganNEO != 0) {
        this.JcfPNN[0] = 0;
        this.JcfPNN[1] = 0;
        this.ganNEO = 0;
        if (this.MNkbEB) {
          var lkgcaO = this.MNkbEB.dBcMeJ.point.style;
          lkgcaO.left = "90px";
          lkgcaO.top = "90px";
          eCaHCJ.boAoLO(this.MNkbEB.dBcMeJ.angle, 0);
        }
      }
    };
    kJfBld.prototype.gENfno = function () {
      if (this.MNkbEB) {
        if (this.MNkbEB.parentNode) {
          return true;
        }
      }
      return false;
    };
    kJfBld.prototype.DpPLBc = function () {
      if (!this.edCPIA) {
        return;
      }
      this.gFPnDb = false;
      if (!this.MNkbEB || this.hJfpGD != 1) {
        return;
      }
      if (!this.MNkbEB.parentNode) {
        this.dbfCbJ.appendChild(this.MNkbEB);
      }
      this.EmgCle();
    };
    kJfBld.prototype.bHjekd = function () {
      this.gFPnDb = false;
      if (this.MNkbEB) {
        if (this.MNkbEB.parentNode) {
          this.MNkbEB.parentNode.removeChild(this.MNkbEB);
        }
      }
    };
    kJfBld.prototype.EmgCle = function () {
      if (!this.MNkbEB) {
        return;
      }
      if (!this.MNkbEB.parentNode) {
        return;
      }
      var PMIDCL = eCaHCJ.piFkGg();
      PMIDCL[2] -= 90;
      PMIDCL[3] -= 90;
      var CbJJIo = gAmDeK.hhcCkm(this.egNOhn);
      this.lGpjEo(CbJJIo);
      gAmDeK.AFMEOb(CbJJIo, this.ChiCPF);
      if (CbJJIo[0] < 90) {
        CbJJIo[0] = 90;
      } else if (CbJJIo[0] > PMIDCL[2]) {
        CbJJIo[0] = PMIDCL[2];
      }
      if (CbJJIo[1] < 90) {
        CbJJIo[1] = 90;
      } else if (CbJJIo[1] > PMIDCL[3]) {
        CbJJIo[1] = PMIDCL[3];
      }
      gAmDeK.CoanLA(CbJJIo);
      this.MNkbEB.style.left = CbJJIo[0] + "px";
      this.MNkbEB.style.top = CbJJIo[1] + "px";
      gAmDeK.dobFPC(CbJJIo, this.ChiCPF);
      this.MNkbEB.CFNjfp = CbJJIo;
    };
    kJfBld.prototype.MjIdnd = function (nFBFbe) {
      if (!this.MNkbEB) {
        return;
      }
      if (!this.MNkbEB.parentNode) {
        return;
      }
      var lkgcaO,
        ccgcPG = this.MNkbEB.CFNjfp;
      var JODlon = gAmDeK.hdEOjG(ccgcPG, nFBFbe);
      if (JODlon <= 50) {
        var PpBHpc = 30;
        if (JODlon > PpBHpc) {
          JODlon = PpBHpc;
        }
        gAmDeK.AFMEOb(nFBFbe, ccgcPG);
        var cOPFgn = gAmDeK.hhcCkm(nFBFbe);
        gAmDeK.hhEDfj(cOPFgn);
        gAmDeK.KmKpcl(cOPFgn, JODlon);
        gAmDeK.ILFDaD(cOPFgn, nFBFbe);
        gAmDeK.iDmHMA(cOPFgn, PpBHpc);
        if (cOPFgn[0] < -1) {
          cOPFgn[0] = -1;
        } else if (cOPFgn[0] > 1) {
          cOPFgn[0] = 1;
        }
        if (cOPFgn[1] < -1) {
          cOPFgn[1] = -1;
        } else if (cOPFgn[1] > 1) {
          cOPFgn[1] = 1;
        }
        gAmDeK.ILFDaD(cOPFgn, this.JcfPNN);
        gAmDeK.dobFPC(nFBFbe, [90, 90]);
        gAmDeK.CoanLA(nFBFbe);
        lkgcaO = this.MNkbEB.dBcMeJ.point.style;
        lkgcaO.left = nFBFbe[0] + "px";
        lkgcaO.top = nFBFbe[1] + "px";
      } else {
        var NmODmn = 0.94;
        var jGehmp = heeNHP.EmhGoa - gAmDeK.jCckph(ccgcPG, nFBFbe);
        if (jGehmp <= NmODmn + 0.03 && jGehmp >= -0.03) {
          if (jGehmp > NmODmn) {
            jGehmp = NmODmn;
          } else if (jGehmp < 0) {
            jGehmp = 0;
          }
          this.ganNEO = jGehmp / NmODmn;
          eCaHCJ.boAoLO(this.MNkbEB.dBcMeJ.angle, -jGehmp);
        }
      }
    };
    kJfBld.prototype.ODbnaC = function () {
      if (this.kimBak) {
        this.kimBak.classList.remove("active");
        if (this.kimBak.parentNode) {
          this.kimBak.parentNode.removeChild(this.kimBak);
        }
      }
    };
    kJfBld.prototype.HOioJb = function () {
      if (!this.edCPIA) {
        return;
      }
      if (!this.kimBak) {
        this.kimBak = BLAZE.nHKIje.mbcAmA(
          "element",
          "game.billiards_spin_button"
        );
        this.kimBak.classList.remove("active");
      }
      if (!this.kimBak.parentNode) {
        this.EIefAg.dBcMeJ.table_markers.appendChild(this.kimBak);
      }
      var CIkflk = Math.round((this.kGpgAl / FBGiBD) * this.ELANMN + lEnGoJ);
      var LLeKOp = Math.round(CIkflk * -0.5);
      var lkgcaO = this.kimBak.style;
      CIkflk = CIkflk + "px";
      lkgcaO.margin = LLeKOp + "px 0 0 " + LLeKOp + "px";
      lkgcaO.width = CIkflk;
      lkgcaO.height = CIkflk;
      this.DbaPoA();
      this.kimBak.classList.add("active");
    };
    kJfBld.prototype.DbaPoA = function () {
      if (!this.edCPIA) {
        return;
      }
      if (!this.kimBak) {
        return;
      }
      if (!this.kimBak.parentNode) {
        return;
      }
      var jOjpDO = eCaHCJ.fMcHfj(this.kimBak.parentNode);
      var hDkLeF = gAmDeK.hhcCkm(this.egNOhn);
      this.fgjdEE(hDkLeF);
      gAmDeK.AFMEOb(hDkLeF, jOjpDO);
      gAmDeK.CoanLA(hDkLeF);
      var lkgcaO = this.kimBak.style;
      lkgcaO.left = hDkLeF[0] + "px";
      lkgcaO.top = hDkLeF[1] + "px";
    };
    kJfBld.prototype.JFhDhe = function () {
      if (!this.aklEOk) {
        return;
      }
      this.bHjekd();
      var ninAcH = this.Aeccip.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        var kiPjJb = this.Aeccip[nJikla];
        if (kiPjJb.parentNode) {
          kiPjJb.parentNode.removeChild(kiPjJb);
        }
      }
      this.CLflLo = false;
      this.aklEOk = null;
    };
    kJfBld.prototype.lEPfHC = function () {
      if (!this.iaNNEe) {
        return;
      }
      var ninAcH = this.ocieMO.length;
      for (var nJikla = 0; nJikla < ninAcH; nJikla++) {
        var kiPjJb = this.ocieMO[nJikla];
        if (kiPjJb.parentNode) {
          kiPjJb.parentNode.removeChild(kiPjJb);
        }
      }
      this.iaNNEe = null;
    };
    kJfBld.prototype.CganCH = function (BPAjkL, iKFKMI) {
      this.JFhDhe();
      var nJikla, BanHbo, MNehDp;
      if (!BPAjkL) {
        BPAjkL = [];
        MNehDp = this.LdmPeG.length;
        for (nJikla = 0; nJikla < MNehDp; nJikla++) {
          BPAjkL.push(this.LdmPeG[nJikla][0]);
        }
      }
      this.aklEOk = BPAjkL;
      this.CLflLo = iKFKMI;
      var pekfOc = this.EIefAg.dBcMeJ.table_markers;
      var jOjpDO = eCaHCJ.fMcHfj(pekfOc);
      var CIkflk = Math.round((this.kGpgAl / FBGiBD) * this.ELANMN + lEnGoJ);
      var LLeKOp = Math.round(CIkflk * -0.5);
      LLeKOp = LLeKOp + "px 0 0 " + LLeKOp + "px";
      CIkflk = CIkflk + "px";
      var iMLCNN = "BilliardsBallMarker";
      if (iKFKMI) {
        iMLCNN = "BilliardsBallMarkerSelect";
      }
      MNehDp = BPAjkL.length;
      for (nJikla = this.Aeccip.length; nJikla < MNehDp; nJikla++) {
        this.Aeccip.push(document.createElement("div"));
      }
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        var DeDKln = this.MoNgbl(oAhABg(BPAjkL[nJikla]));
        if (DeDKln) {
          if (DeDKln[1]) {
            var hDkLeF = gAmDeK.hhcCkm(DeDKln[2]);
            this.fgjdEE(hDkLeF);
            gAmDeK.AFMEOb(hDkLeF, jOjpDO);
            gAmDeK.CoanLA(hDkLeF);
            var kiPjJb = this.Aeccip[nJikla];
            var lkgcaO = kiPjJb.style;
            kiPjJb.className = iMLCNN;
            lkgcaO.left = hDkLeF[0] + "px";
            lkgcaO.top = hDkLeF[1] + "px";
            lkgcaO.width = CIkflk;
            lkgcaO.height = CIkflk;
            lkgcaO.margin = LLeKOp;
            pekfOc.appendChild(kiPjJb);
            if (iKFKMI) {
              Ifhifh.KAMAEJ(kiPjJb, this.HKEGAA, [this, DeDKln[0]], false);
            }
          }
        }
      }
    };
    kJfBld.prototype.LEajpf = function (BPAjkL) {
      this.lEPfHC();
      this.iaNNEe = BPAjkL;
      var pekfOc = this.EIefAg.dBcMeJ.table_markers;
      var jOjpDO = eCaHCJ.fMcHfj(pekfOc);
      var CIkflk = Math.round(jApFgf * this.ELANMN);
      var CMbeCf = Math.round(EDfDPf * this.ELANMN);
      if (CMbeCf < 1) {
        CMbeCf = 1;
      }
      var LLeKOp = Math.round(CIkflk * -0.5);
      LLeKOp = LLeKOp + "px 0 0 " + LLeKOp + "px";
      CIkflk = CIkflk + "px";
      var iMLCNN = "BilliardsPocketMarker marker_";
      var nJikla,
        BanHbo,
        GApkjE,
        MNehDp = BPAjkL.length;
      for (nJikla = this.ocieMO.length; nJikla < MNehDp; nJikla++) {
        this.ocieMO.push(document.createElement("div"));
      }
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        BanHbo = BPAjkL[nJikla].split(":");
        if (BanHbo.length == 2) {
          var ihaiDN = this.eGCDjK["_" + BanHbo[0]];
          if (ihaiDN) {
            ihaiDN = gAmDeK.hhcCkm(ihaiDN);
            this.fgjdEE(ihaiDN);
            gAmDeK.AFMEOb(ihaiDN, jOjpDO);
            gAmDeK.CoanLA(ihaiDN);
            var kiPjJb = this.ocieMO[nJikla];
            var lkgcaO = kiPjJb.style;
            kiPjJb.className = iMLCNN + BanHbo[1];
            lkgcaO.left = ihaiDN[0] + "px";
            lkgcaO.top = ihaiDN[1] + "px";
            lkgcaO.width = CIkflk;
            lkgcaO.height = CIkflk;
            lkgcaO.margin = LLeKOp;
            lkgcaO.borderWidth = CMbeCf + "px";
            pekfOc.appendChild(kiPjJb);
          }
        }
      }
    };
    kJfBld.prototype.HKEGAA = function (CdBicM, BfAgjC) {
      BfAgjC = oAhABg(BfAgjC);
      if (BfAgjC < 0) {
        return;
      }
      if (CdBicM.lPdHHA.EAflFm) {
        CdBicM.ijmngN.KPeAhF({
          c: "chs",
          v: BfAgjC,
        });
      }
      CdBicM.FmDnpD(
        BfAgjC,
        oAhABg(CdBicM.PoBoEO[1]),
        oAhABg(CdBicM.PoBoEO[2]),
        false
      );
      CdBicM.PoBoEO = null;
      CdBicM.JFhDhe();
    };
    kJfBld.prototype.bjKIHP = function (FcjjJm) {
      this.PoBoEO = FcjjJm;
      this.CganCH(null, true);
    };
    kJfBld.prototype.NChMAD = function () {
      if (this.hJfpGD != 1) {
        return;
      }
      EKClpk = this.MoNgbl(this.cbkfNj);
      if (!EKClpk) {
        return;
      }
      if (!EKClpk[1]) {
        return;
      }
      var nFBFbe = gAmDeK.hhcCkm(this.GPilDB);
      this.CPFcMg(nFBFbe);
      if (gAmDeK.hdEOjG(nFBFbe, EKClpk[2]) < this.kGpgAl) {
        this.DpPLBc();
        return;
      }
      this.kBJbiI = true;
    };
    kJfBld.prototype.BDiIMi = function (nFBFbe) {
      if (!this.kBJbiI || this.hJfpGD != 1) {
        return;
      }
      this.kBJbiI = false;
      EKClpk = this.MoNgbl(this.cbkfNj);
      if (!EKClpk) {
        return;
      }
      if (!EKClpk[1]) {
        return;
      }
      var nFBFbe = gAmDeK.hhcCkm(this.GPilDB);
      var AeojHh = this.nmoNPE;
      if (AeojHh > 0.7) {
        AeojHh = AeojHh * 1.15;
      } else if (AeojHh < 0.3) {
        AeojHh = AeojHh * 0.9;
      }
      if (AeojHh < LiMFfn) {
        AeojHh = LiMFfn;
      } else if (AeojHh > 1) {
        AeojHh = 1;
      }
      this.CPFcMg(nFBFbe);
      gAmDeK.AFMEOb(nFBFbe, EKClpk[2]);
      gAmDeK.hhEDfj(nFBFbe);
      gAmDeK.KmKpcl(nFBFbe, this.cCaCnB * AeojHh);
      var GBKnBf;
      if (this.edCPIA) {
        GBKnBf = gAmDeK.hhcCkm(this.JcfPNN);
        GBKnBf[2] = this.ganNEO;
        GBKnBf[0] = heeNHP.CoanLA(GBKnBf[0] * 1000);
        GBKnBf[1] = heeNHP.CoanLA(GBKnBf[1] * 1000);
        GBKnBf[2] = heeNHP.CoanLA(GBKnBf[2] * 1000);
      } else {
        GBKnBf = [0, 0, 0];
      }
      this.naalNm(this.cbkfNj, nFBFbe, GBKnBf, -1, -1, 0);
    };
    kJfBld.prototype.MDFfNa = function (kOcBHb) {
      if (this.lIKDEP) {
        this.ecPihA();
      } else {
        if (this.gENfno()) {
          this.bHjekd();
          return;
        }
        this.GPilDB[0] = kOcBHb.clientX;
        this.GPilDB[1] = kOcBHb.clientY;
        if (this.hJfpGD == 1) {
          kOcBHb.preventDefault();
          kOcBHb.stopPropagation();
          this.jKJgpI();
          this.NChMAD();
          this.GojNPc();
        }
      }
    };
    kJfBld.prototype.aMafId = function (kOcBHb) {
      if (kOcBHb.target) {
        if (
          kOcBHb.target.id.substr(0, 12) == "videoplayer_" ||
          kOcBHb.target.id.substr(0, 16) == "instagramplayer_"
        ) {
          return;
        }
      }
      if (this.gENfno()) {
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
        this.gFPnDb = false;
        return;
      }
      this.GPilDB[0] = kOcBHb.clientX;
      this.GPilDB[1] = kOcBHb.clientY;
      if (this.hJfpGD == 1) {
        if (kOcBHb.target) {
          kOcBHb.preventDefault();
          kOcBHb.stopPropagation();
          this.jKJgpI();
          this.BDiIMi();
        }
      } else if (this.eIFOFn.FcjjJm) {
        if (kOcBHb.target) {
          if (kOcBHb.target.oBAgKJ || kOcBHb.target.DNPfDh) {
            this.jlKNfn();
          }
        }
      }
    };
    kJfBld.prototype.dElBBP = function (kOcBHb) {
      if (this.gENfno()) {
        if (this.gFPnDb) {
          this.MjIdnd([kOcBHb.clientX, kOcBHb.clientY]);
        }
        return;
      }
      this.GPilDB[0] = kOcBHb.clientX;
      this.GPilDB[1] = kOcBHb.clientY;
      if (this.hJfpGD == 1) {
        this.jKJgpI();
        this.GojNPc();
      } else if (this.eIFOFn.FcjjJm) {
        gAmDeK.ILFDaD(this.GPilDB, this.eIFOFn.nFBFbe);
        this.bnoHoE(false, false);
      }
    };
    kJfBld.prototype.mICDkd = function (kOcBHb) {
      if (kOcBHb.changedTouches.length < 1) {
        return;
      }
      var mbCOgG = kOcBHb.changedTouches[0];
      if (mbCOgG.target) {
        if (mbCOgG.target.id == "RoomChatInput") {
          return;
        }
      }
      if (this.lIKDEP) {
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
        this.ecPihA();
      } else {
        if (this.gENfno()) {
          this.bHjekd();
          return;
        }
        this.GPilDB[0] = mbCOgG.clientX;
        this.GPilDB[1] = mbCOgG.clientY;
        if (this.hJfpGD == 1) {
          this.jKJgpI();
          this.NChMAD();
          this.GojNPc();
        } else if (this.eIFOFn.FcjjJm) {
          if (kOcBHb.target) {
            if (kOcBHb.target.oBAgKJ || kOcBHb.target.DNPfDh) {
              this.heHAOb();
            }
          }
        }
      }
    };
    kJfBld.prototype.OGOFGk = function (kOcBHb) {
      if (this.gENfno()) {
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
        this.gFPnDb = false;
        return;
      }
      if (kOcBHb.changedTouches.length < 1) {
        return;
      }
      var mbCOgG = kOcBHb.changedTouches[0];
      if (mbCOgG.target) {
        if (mbCOgG.target.id == "RoomChatInput") {
          return;
        }
      }
      this.GPilDB[0] = mbCOgG.clientX;
      this.GPilDB[1] = mbCOgG.clientY;
      if (this.eIFOFn.FcjjJm) {
        if (kOcBHb.target) {
          if (kOcBHb.target.oBAgKJ || kOcBHb.target.DNPfDh) {
            this.jlKNfn();
            kOcBHb.preventDefault();
            kOcBHb.stopPropagation();
          }
        }
      } else if (this.hJfpGD == 1) {
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
        this.jKJgpI();
        this.BDiIMi();
      }
    };
    kJfBld.prototype.JfkIKm = function (kOcBHb) {
      if (this.gENfno()) {
        this.gFPnDb = false;
      }
      if (this.hJfpGD == 1) {
        this.kBJbiI = false;
      }
    };
    kJfBld.prototype.hbDNId = function (kOcBHb) {
      if (kOcBHb.changedTouches.length < 1) {
        return;
      }
      var mbCOgG = kOcBHb.changedTouches[0];
      if (this.gENfno()) {
        if (this.gFPnDb) {
          this.MjIdnd([mbCOgG.clientX, mbCOgG.clientY]);
        }
        return;
      }
      this.GPilDB[0] = mbCOgG.clientX;
      this.GPilDB[1] = mbCOgG.clientY;
      if (this.hJfpGD == 1) {
        this.jKJgpI();
        this.GojNPc();
      } else if (this.eIFOFn.FcjjJm) {
        gAmDeK.ILFDaD(this.GPilDB, this.eIFOFn.nFBFbe);
        this.bnoHoE(false, false);
      }
    };
    kJfBld.prototype.hLeciN = function (kOcBHb) {
      kOcBHb.preventDefault();
      kOcBHb.stopPropagation();
    };
    kJfBld.prototype.pnKMDG = function () {
      if (!BLAZE.nHKIje.mbCOgG) {
        this.bHjekd();
      }
    };
    kJfBld.prototype.OfJfgj = function (kOcBHb) {
      if (this.gENfno()) {
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
        this.gFPnDb = true;
        this.MjIdnd([kOcBHb.clientX, kOcBHb.clientY]);
        return;
      }
    };
    kJfBld.prototype.GgDEmE = function (kOcBHb) {
      if (kOcBHb.changedTouches.length < 1) {
        return;
      }
      var mbCOgG = kOcBHb.changedTouches[0];
      if (this.gENfno()) {
        kOcBHb.preventDefault();
        kOcBHb.stopPropagation();
        this.gFPnDb = true;
        this.MjIdnd([mbCOgG.clientX, mbCOgG.clientY]);
        return;
      }
    };
    kJfBld.prototype.oCJPLH = function (
      doAlFi,
      AbPlpB,
      FIDdHp,
      AEkimC,
      NjhhIa
    ) {
      doAlFi = oAhABg(doAlFi);
      if (doAlFi < 0 || doAlFi > CeINlb.length - 1) {
        $error(17992881);
        return;
      }
      AbPlpB = oAhABg(AbPlpB);
      FIDdHp = oAhABg(FIDdHp);
      AEkimC = oAhABg(AEkimC);
      this.IaHPie = ocPfib();
      this.inBIAD = CeINlb[doAlFi];
      this.cPHnOo = oAhABg(NjhhIa);
      var nJikla, gPbjeM;
      this.LfbLdL(0);
      this.CjOjcD();
      this.JFhDhe();
      this.lEPfHC();
      this.KkEMiL.OomKnE();
      this.EJMEGi = false;
      this.BnkPBg = false;
      var PHmOCa = this.inBIAD.hGENFN;
      if (PHmOCa < 0 || PHmOCa > FBGPbj.length - 1) {
        $error(68909385);
        return;
      }
      var eaeMcg = this.inBIAD.BcfEoi;
      if (eaeMcg < 0 || eaeMcg > DIbFOl.length - 1) {
        $error(40991801);
        return;
      }
      var JDJFcD = DIbFOl[eaeMcg];
      var NFNlob = this.EIefAg.dBcMeJ;
      NFNlob.table_framework.style.backgroundImage =
        'url("' +
        BLAZE.nHKIje.mbcAmA("bitmap", "billiards_framework_" + PHmOCa).src +
        '")';
      NFNlob.table_base.style.backgroundImage =
        'url("' +
        BLAZE.nHKIje.mbcAmA("bitmap", "billiards_default_table").src +
        '")';
      this.lbjIfp = FBGPbj[PHmOCa].DFMGlO;
      this.dKFOLm = {
        HALPNJ: PPDOLM.FbiDLN(FBGPbj[PHmOCa].gPNJKB),
        kGglbf: PPDOLM.FbiDLN(FBGPbj[PHmOCa].EPEBHA),
        jfdmpN: [
          FBGPbj[PHmOCa].IgFLDM[0],
          FBGPbj[PHmOCa].IgFLDM[1],
          Math.round(
            gAmDeK.hdEOjG(FBGPbj[PHmOCa].IgFLDM[0], FBGPbj[PHmOCa].IgFLDM[1]) -
              JjCcIh
          ),
        ],
      };
      this.eGCDjK = FBGPbj[PHmOCa].pdChmp;
      this.CCKhkd = FBGPbj[PHmOCa].fjOCJF;
      this.MEPbdm = FBGPbj[PHmOCa].IongNc;
      this.CgaDOF = FBGPbj[PHmOCa].kKaEmO;
      this.fdElLH = JDJFcD.FIIKjN;
      this.LDjPhg = JDJFcD.FIIKjN * FBGiBD;
      this.kGpgAl = this.LDjPhg * 2;
      if (this.cPHnOo == 1) {
        this.cCaCnB = Math.round(this.inBIAD.cFhfKD * AljCfe * FBGiBD);
        this.kDHnLF = Math.round(this.inBIAD.ngGAoo * AFGlNi * FBGiBD);
        this.hbGgcL = Math.round(this.inBIAD.ngGAoo * aPFMLJ * FBGiBD);
      } else {
        this.cCaCnB = Math.round(this.inBIAD.cFhfKD * FBGiBD);
        this.hbGgcL = Math.round(this.inBIAD.ngGAoo * FBGiBD);
      }
      this.ddLPpb = Math.round(this.inBIAD.cioEoD * FBGiBD);
      ioDFlJ = this.kGpgAl;
      KHeDBn = this.kGpgAl * this.kGpgAl;
      this.KdhOcg = {};
      this.LdmPeG = [];
      var aJMlAE = BLAZE.nHKIje.mbcAmA("bitmap", iddNhL);
      var fDjpnk = (JDJFcD.FIIKjN * 2) / 50;
      var JbglmN = (JDJFcD.FIIKjN * 2) / 40 - 0.02;
      var bkMKoB = this.inBIAD.LdmPeG.clone();
      var MNehDp = bkMKoB.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        gPbjeM = bkMKoB[nJikla];
        EKClpk = [gPbjeM[0], 0, [0, 0], [0, 0], [1, 0], 0];
        var JGMbof = JDJFcD.LdmPeG[gPbjeM[1]];
        ecMoLj = new BLAZE.ePAIpG(aJMlAE, 1, 4, ABGeNN);
        ecMoLj.HINoko(fDjpnk);
        ecMoLj.aciHoI(0);
        this.KkEMiL.hMCCCH(-1, ecMoLj);
        EKClpk.push(ecMoLj);
        ifECaD = new BLAZE.ePAIpG(aJMlAE, 1, 4, ABGeNN);
        ifECaD.HINoko(fDjpnk);
        ifECaD.aciHoI(JGMbof[0]);
        ecMoLj.hMCCCH(-1, ifECaD);
        EKClpk.push(ifECaD);
        if (JGMbof[1] < 0) {
          EKClpk.push(null);
        } else {
          ifECaD = new BLAZE.ePAIpG(
            BLAZE.nHKIje.mbcAmA("bitmap", "billiards_ballanim_" + JGMbof[1]),
            1,
            4,
            OgHHOa
          );
          ifECaD.HINoko(JbglmN);
          ifECaD.aciHoI(heeNHP.BOPNcF(0, DLCmbG - 1));
          ifECaD.GJiHBl = heeNHP.BOPNcF(0, 359);
          ecMoLj.hMCCCH(-1, ifECaD);
          EKClpk.push(ifECaD);
        }
        EKClpk.push(0);
        EKClpk.push(0);
        EKClpk.push(null);
        EKClpk.push([-1, -1, -1, -1, -1, -1, -1]);
        this.LdmPeG.push(EKClpk);
        this.KdhOcg["_" + EKClpk[0]] = nJikla;
        this.DKbhJP(EKClpk);
      }
      NFNlob.table_fabric.classList.remove("transition");
      NFNlob.table_fabric.style.backgroundImage = "none";
      NFNlob.table_image.classList.remove("transition");
      NFNlob.table_image.style.backgroundImage = "none";
      if (AbPlpB > 0) {
        gPbjeM = "ttb" + AbPlpB;
        BLAZE.nHKIje.LepiMi(
          gPbjeM,
          lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
          1,
          this.iaDHdE,
          this
        );
      }
      if (FIDdHp > 0) {
        NFNlob.table_fabric.style.display = "block";
        NFNlob.table_fabric.style.opacity = "0";
        gPbjeM = "fbr" + FIDdHp;
        BLAZE.nHKIje.LepiMi(
          gPbjeM,
          lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
          1,
          this.IfJEem,
          this
        );
      } else {
        NFNlob.table_fabric.style.display = "none";
      }
      if (AEkimC > 0) {
        NFNlob.table_image.style.display = "block";
        NFNlob.table_image.style.opacity = "0";
        gPbjeM = "tbg" + AEkimC;
        BLAZE.nHKIje.LepiMi(
          gPbjeM,
          lDkhIC + gPbjeM + ".png?" + BLAZE.CONTENT_VERSION,
          1,
          this.gmenKc,
          this
        );
      } else {
        NFNlob.table_image.style.display = "none";
      }
    };
    kJfBld.prototype.nFmDJK = function (jnpEnJ) {
      this.CKjkNn = pBEPNj.bbAjMN(LPMdCb.NhIEle(jnpEnJ));
      this.Lgfpmn();
    };
    kJfBld.prototype.Lgfpmn = function () {
      var NijGEA = {};
      var DPgLEc = [];
      var bkMKoB = this.inBIAD.LdmPeG.clone();
      var GApkjE,
        aiGaBN,
        nJikla,
        MNehDp = bkMKoB.length;
      var dHNdGJ = 0;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        GApkjE = bkMKoB.remove(this.CKjkNn[dHNdGJ] % bkMKoB.length);
        aiGaBN = GApkjE[0];
        dHNdGJ++;
        if (dHNdGJ > 15) {
          dHNdGJ = 0;
        }
        EKClpk = this.MoNgbl(aiGaBN);
        DPgLEc.push(EKClpk);
        NijGEA["_" + aiGaBN] = nJikla;
      }
      this.LdmPeG = DPgLEc;
      this.KdhOcg = NijGEA;
    };
    kJfBld.prototype.dfLGCP = function () {
      if (!this.inBIAD) {
        $warn(97330684);
        return;
      }
      HEOfca.lBHHDa("table_setup", 1, false, 0, false);
      this.EJMEGi = false;
      this.LfbLdL(0);
      var nJikla, chbDLG, hlajed, jFblnP;
      var MANgff = this.inBIAD.MANgff * FBGiBD;
      var gfFdMf = MANgff * 2;
      var bbfNem = this.inBIAD.MaKOHK.clone();
      var MKpehM = {};
      var fpiObe = [];
      var bkMKoB = this.inBIAD.LdmPeG;
      var MNehDp = bkMKoB.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        EKClpk = bkMKoB[nJikla];
        hlajed = EKClpk[2];
        if (hlajed >= 0) {
          MKpehM["_" + EKClpk[0]] = bbfNem[hlajed];
          bbfNem[hlajed] = null;
        }
      }
      MNehDp = bbfNem.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        if (bbfNem[nJikla]) {
          fpiObe.push(bbfNem[nJikla]);
        }
      }
      var kpHbnJ = [1, 1];
      var MNehDp = this.LdmPeG.length;
      var JeMcaJ = 0;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        EKClpk = this.LdmPeG[nJikla];
        ecMoLj = EKClpk[6];
        ifECaD = EKClpk[7];
        EKClpk[1] = 1;
        hlajed = "_" + EKClpk[0];
        if (MKpehM[hlajed]) {
          gAmDeK.ILFDaD(MKpehM[hlajed], EKClpk[2]);
        } else {
          chbDLG = fpiObe.shift();
          gAmDeK.ILFDaD(chbDLG, EKClpk[2]);
        }
        jFblnP = Math.round(this.CKjkNn[JeMcaJ] / 2.55) * 0.01;
        JeMcaJ++;
        if (JeMcaJ > 15) {
          JeMcaJ = 0;
        }
        EKClpk[2][0] += gfFdMf * jFblnP - MANgff;
        jFblnP = Math.round(this.CKjkNn[JeMcaJ] / 2.55) * 0.01;
        JeMcaJ++;
        if (JeMcaJ > 15) {
          JeMcaJ = 0;
        }
        EKClpk[2][1] += gfFdMf * jFblnP - MANgff;
        ecMoLj.kpHbnJ = kpHbnJ;
        ecMoLj.GGkPfl = 1;
        ifECaD.GGkPfl = 1;
        EKClpk[3][0] = 0;
        EKClpk[3][1] = 0;
        EKClpk[5] = 0;
        if (EKClpk[8]) {
          EKClpk[8].GGkPfl = 1;
          EKClpk[8].aciHoI(heeNHP.BOPNcF(0, DLCmbG - 1));
          EKClpk[8].GJiHBl = heeNHP.BOPNcF(0, 359);
        }
        EKClpk[9] = 0;
        EKClpk[10] = 0;
        EKClpk[11] = null;
        this.DKbhJP(EKClpk);
      }
      this.BnkPBg = false;
      this.KkEMiL.BeDIGn();
    };
    kJfBld.prototype.aJijiE = function (FcjjJm) {
      this.EJMEGi = false;
      this.LfbLdL(0);
      var kpHbnJ = [1, 1];
      var nJikla,
        MNehDp = this.LdmPeG.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        EKClpk = this.LdmPeG[nJikla];
        ecMoLj = EKClpk[6];
        ifECaD = EKClpk[7];
        EKClpk[1] = 0;
        ecMoLj.kpHbnJ = kpHbnJ;
        ecMoLj.GGkPfl = 1;
        ifECaD.GGkPfl = 1;
        EKClpk[3][0] = 0;
        EKClpk[3][1] = 0;
        EKClpk[5] = 0;
        if (EKClpk[8]) {
          EKClpk[8].GGkPfl = 1;
        }
        EKClpk[9] = 0;
        EKClpk[10] = 0;
        EKClpk[11] = null;
      }
      MNehDp = FcjjJm.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        var BanHbo = FcjjJm[nJikla].split(";");
        if (BanHbo.length == 3) {
          EKClpk = this.MoNgbl(BanHbo[0]);
          if (EKClpk) {
            EKClpk[1] = 1;
            EKClpk[2][0] = pBEPNj.AiaDbo(BanHbo[1]);
            EKClpk[2][1] = pBEPNj.AiaDbo(BanHbo[2]);
          } else {
            $warn(12069251);
          }
        } else {
          $warn(12069252);
        }
      }
      MNehDp = this.LdmPeG.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        this.DKbhJP(this.LdmPeG[nJikla]);
      }
      this.BnkPBg = false;
      this.KkEMiL.BeDIGn();
    };
    kJfBld.prototype.nbhCHg = function (BfAgjC, enPdMi, bkMKoB, GEfaiC) {
      if (!this.inBIAD) {
        $warn(88029851);
        return;
      }
      enPdMi = oAhABg(enPdMi);
      BfAgjC = oAhABg(BfAgjC);
      var DeDKln = this.MoNgbl(BfAgjC);
      if (!DeDKln) {
        $warn(88029852);
        return;
      }
      if (!DeDKln[1]) {
        $warn(88029853);
        return;
      }
      var nJikla, MNehDp;
      var kBBlEC = DeDKln[2];
      var jcFodg = oAhABg(this.lPdHHA.FiGccl);
      var JDJFcD = null;
      if (bkMKoB) {
        JDJFcD = {};
        MNehDp = bkMKoB.length;
        for (var nJikla = 0; nJikla < MNehDp; nJikla++) {
          JDJFcD["_" + bkMKoB[nJikla]] = true;
        }
      }
      var MHCegp = null;
      if (GEfaiC) {
        MHCegp = {};
        MNehDp = GEfaiC.length;
        for (nJikla = 0; nJikla < MNehDp; nJikla++) {
          MHCegp["_" + GEfaiC[nJikla]] = true;
        }
      }
      var GjJMBL = heeNHP.CoanLA(this.kGpgAl * 0.4);
      if (jcFodg == 0) {
        nJikla = 0.18;
      } else if (jcFodg == 1) {
        nJikla = 0.14;
      } else if (jcFodg == 2) {
        nJikla = 0.09;
      }
      var aFNDdf = heeNHP.CoanLA(
        this.kGpgAl - FBGiBD * heeNHP.BOPNcF(30, 100) * nJikla
      );
      var nFeMBB = [0, 0];
      var hCDbPH = null;
      MNehDp = this.LdmPeG.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        var KKJEDI = this.LdmPeG[nJikla];
        if (KKJEDI[1]) {
          if (KKJEDI[0] != BfAgjC) {
            if (JDJFcD) {
              if (!JDJFcD["_" + KKJEDI[0]]) {
                continue;
              }
            }
            gAmDeK.ILFDaD(KKJEDI[2], nFeMBB);
            var GDNANH = gAmDeK.hdEOjG(kBBlEC, nFeMBB);
            for (var hdELjN in this.CCKhkd) {
              if (MHCegp) {
                if (!MHCegp[hdELjN]) {
                  continue;
                }
              }
              hCDbPH = gAmDeK.kbKEhc(nFeMBB, this.CCKhkd[hdELjN]);
              gAmDeK.hhEDfj(hCDbPH);
              gAmDeK.KmKpcl(hCDbPH, aFNDdf);
              gAmDeK.dobFPC(hCDbPH, nFeMBB);
              if (GDNANH - gAmDeK.hdEOjG(kBBlEC, hCDbPH) < GjJMBL) {
                continue;
              }
              if (this.GHBGbI(kBBlEC, hCDbPH, BfAgjC, KKJEDI[0])) {
                continue;
              }
              if (this.GHBGbI(hCDbPH, this.CCKhkd[hdELjN], KKJEDI[0], -1)) {
                continue;
              }
              nJikla = MNehDp;
              break;
            }
          }
        }
      }
      if (!hCDbPH) {
        nJikla = GjJMBL * 2;
        hCDbPH = nFeMBB;
        if (hCDbPH[0] == 0 && hCDbPH[1] == 0) {
          hCDbPH = gAmDeK.AoIDnd();
          gAmDeK.dobFPC(hCDbPH, kBBlEC);
        } else {
          gAmDeK.dobFPC(hCDbPH, [
            heeNHP.BOPNcF(0, nJikla) - GjJMBL,
            heeNHP.BOPNcF(0, nJikla) - GjJMBL,
          ]);
        }
      }
      gAmDeK.AFMEOb(hCDbPH, kBBlEC);
      gAmDeK.hhEDfj(hCDbPH);
      gAmDeK.KmKpcl(hCDbPH, heeNHP.BOPNcF(50, 100) * 0.01 * this.cCaCnB);
      this.naalNm(BfAgjC, hCDbPH, [0, 0, 0], enPdMi, 0, 1);
    };
    kJfBld.prototype.naalNm = function (
      BfAgjC,
      bIfjIP,
      GBKnBf,
      enPdMi,
      jeCmLK,
      BNiodg
    ) {
      if (!this.inBIAD) {
        $warn(57239481);
        return;
      }
      EKClpk = this.MoNgbl(BfAgjC);
      if (!EKClpk) {
        $warn(57239482);
        return;
      }
      if (!EKClpk[1]) {
        $warn(57239483);
        return;
      }
      this.JFhDhe();
      this.ijmngN.pHlLKH();
      this.GeeLHF = BfAgjC;
      this.AOCNnD = 0;
      this.PPNhdP = 0;
      this.pjidop();
      if (GBKnBf[0] < -1000) {
        GBKnBf[0] = -1000;
      } else if (GBKnBf[0] > 1000) {
        GBKnBf[0] = 1000;
      }
      if (GBKnBf[1] < -1000) {
        GBKnBf[1] = -1000;
      } else if (GBKnBf[1] > 1000) {
        GBKnBf[1] = 1000;
      }
      if (GBKnBf[2] < -1000) {
        GBKnBf[2] = -1000;
      } else if (GBKnBf[2] > 1000) {
        GBKnBf[2] = 1000;
      }
      var LajpAm = GBKnBf.clone();
      if (LajpAm[0] == 0 && LajpAm[1] == 0 && LajpAm[2] == 0) {
        EKClpk[11] = null;
      } else {
        gAmDeK.hhEDfj(LajpAm);
        EKClpk[11] = LajpAm;
        EKClpk[11][2] = EKClpk[11][2] * LajpAm[0] * 0.00006;
        EKClpk[11][3] = gAmDeK.jCckph([0, 0], LajpAm);
      }
      gAmDeK.CoanLA(bIfjIP);
      gAmDeK.ILFDaD(bIfjIP, EKClpk[3]);
      gAmDeK.ILFDaD(EKClpk[3], EKClpk[4]);
      gAmDeK.hhEDfj(EKClpk[4]);
      EKClpk[5] = heeNHP.CoanLA(gAmDeK.LPNBNn(EKClpk[3]));
      if (EKClpk[5] > this.cCaCnB) {
        EKClpk[5] = this.cCaCnB;
        gAmDeK.ILFDaD(EKClpk[4], EKClpk[3]);
        gAmDeK.KmKpcl(EKClpk[3], EKClpk[5]);
      }
      if (EKClpk[8]) {
        EKClpk[8].GJiHBl = gAmDeK.andOKf(EKClpk[4]);
      }
      this.FmDnpD(BfAgjC, enPdMi, jeCmLK, true);
      if (BNiodg > 0) {
        this.EJMEGi = true;
        this.CgbpOO.classList.add("autodist");
        window.setTimeout(this.nAFFeg, 400, [this, EKClpk[5]]);
        window.setTimeout(this.EaGmLD, 400, this);
        this.nmoNPE = gAmDeK.LPNBNn(bIfjIP) / this.cCaCnB;
        if (this.nmoNPE < LiMFfn) {
          this.nmoNPE = LiMFfn;
        }
        this.kdMKBf();
      } else {
        this.EJMEGi = false;
        this.kdPnEj("knblMN", EKClpk[5]);
        this.LfbLdL(mhoHip);
        this.CgbpOO.classList.remove("autodist");
        this.BnkPBg = true;
        this.cjfpnD.style.top =
          heeNHP.CoanLA(this.ELANMN * (this.fdElLH - 5)) + "px";
      }
      var BIjkeE = gAmDeK.hhcCkm(EKClpk[2]);
      var LCEBGF = gAmDeK.ADJoEM(BIjkeE, EKClpk[3]);
      if (this.eHDpeC.pgnpck) {
        var nJikla = BIjkeE[1];
        BIjkeE[1] = gbgEGp[1] - BIjkeE[0];
        BIjkeE[0] = nJikla;
        nJikla = LCEBGF[1];
        LCEBGF[1] = gbgEGp[1] - LCEBGF[0];
        LCEBGF[0] = nJikla;
        this.BMbpPO = gAmDeK.jCckph(LCEBGF, BIjkeE);
      } else {
        this.BMbpPO = gAmDeK.jCckph(BIjkeE, LCEBGF);
      }
      this.dgImkM = false;
      eCaHCJ.boAoLO(this.CgbpOO, this.BMbpPO);
      if (BNiodg == 0 || BNiodg == 1) {
        this.ijmngN.KPeAhF({
          c: "shot",
          v: [
            BfAgjC,
            pBEPNj.lNAdKJ(EKClpk[2][0], 0),
            pBEPNj.lNAdKJ(EKClpk[2][1], 0),
            bIfjIP[0],
            bIfjIP[1],
            GBKnBf[0],
            GBKnBf[1],
            GBKnBf[2],
          ].join(":"),
        });
      }
    };
    kJfBld.prototype.nAFFeg = function (oAaADp) {
      if (!oAaADp) {
        return;
      }
      oAaADp[0].kdPnEj("knblMN", oAaADp[1]);
    };
    kJfBld.prototype.EaGmLD = function (NKIIgg) {
      if (!NKIIgg.EJMEGi) {
        return;
      }
      NKIIgg.LfbLdL(mhoHip);
      NKIIgg.CgbpOO.classList.remove("autodist");
      NKIIgg.EJMEGi = false;
      NKIIgg.BnkPBg = true;
      NKIIgg.cjfpnD.style.top =
        heeNHP.CoanLA(NKIIgg.ELANMN * (NKIIgg.fdElLH - 5)) + "px";
    };
    kJfBld.prototype.MoNgbl = function (BfAgjC) {
      BfAgjC = oAhABg(BfAgjC);
      cFPbma = this.KdhOcg["_" + BfAgjC];
      if (cFPbma === undefined) {
        $warn(49005901);
        return null;
      }
      EKClpk = this.LdmPeG[cFPbma];
      if (EKClpk[0] != BfAgjC) {
        $warn(49005902);
        return null;
      }
      return EKClpk;
    };
    kJfBld.prototype.pjidop = function () {
      if (this.BnkPBg) {
        $warn(60297738);
      }
      var KPGana,
        MNehDp = this.LdmPeG.length;
      for (var nJikla = 0; nJikla < MNehDp; nJikla++) {
        KPGana = this.LdmPeG[nJikla][12];
        KPGana[0] = -1;
        KPGana[1] = -1;
        KPGana[2] = -1;
        KPGana[3] = -1;
        KPGana[4] = -1;
        KPGana[5] = -1;
        KPGana[6] = -1;
      }
    };
    kJfBld.prototype.ocNCAH = function () {
      return ocPfib() - this.IaHPie < 1000;
    };
    kJfBld.prototype.MjEImb = function (mgKkDL, OIBhDm, NKIIgg) {
      if (!NKIIgg) {
        return;
      }
      if (!NKIIgg.kODmho) {
        return;
      }
      if (OIBhDm && !NKIIgg.kODmho[mgKkDL]) {
        NKIIgg.kODmho[mgKkDL] = 'url("' + OIBhDm.src + '")';
        if (NKIIgg.hJfpGD > 0) {
          if (NKIIgg.FMCENE === mgKkDL) {
            NKIIgg.CELFjd.style.backgroundImage = NKIIgg.kODmho[mgKkDL];
            if (mgKkDL.substring(0, 4) == "acue") {
              NKIIgg.CELFjd.classList.add("sprite");
              NKIIgg.lFDcfc.style.backgroundImage = NKIIgg.kODmho[mgKkDL];
              var JPCJka = Jbelce[oAhABg(mgKkDL.substring(4))];
              NKIIgg.lFDcfc.style.top = JPCJka[0] + "%";
              NKIIgg.lFDcfc.style.bottom = 100 - JPCJka[0] - 50 + "%";
              BdGKkh.mmLpgC(NKIIgg.lFDcfc, JPCJka[3], JPCJka[1], JPCJka[2]);
            } else {
              NKIIgg.CELFjd.classList.remove("sprite");
              NKIIgg.lFDcfc.style.backgroundImage = "";
              BdGKkh.MgpPIb(NKIIgg.lFDcfc, true);
            }
          }
        }
      }
    };
    kJfBld.prototype.iaDHdE = function (mgKkDL, OIBhDm, NKIIgg) {
      if (!NKIIgg || !OIBhDm) {
        return;
      }
      if (!NKIIgg.EIefAg) {
        return;
      }
      var EEfbOm = NKIIgg.EIefAg.dBcMeJ.table_base;
      EEfbOm.style.backgroundImage = 'url("' + OIBhDm.src + '")';
    };
    kJfBld.prototype.IfJEem = function (mgKkDL, OIBhDm, NKIIgg) {
      if (!NKIIgg || !OIBhDm) {
        return;
      }
      if (!NKIIgg.EIefAg) {
        return;
      }
      var EEfbOm = NKIIgg.EIefAg.dBcMeJ.table_fabric;
      EEfbOm.style.backgroundImage = 'url("' + OIBhDm.src + '")';
      if (!NKIIgg.ocNCAH()) {
        EEfbOm.classList.add("transition");
      }
      EEfbOm.style.opacity = "1";
    };
    kJfBld.prototype.gmenKc = function (mgKkDL, OIBhDm, NKIIgg) {
      if (!NKIIgg || !OIBhDm) {
        return;
      }
      if (!NKIIgg.EIefAg) {
        return;
      }
      var EEfbOm = NKIIgg.EIefAg.dBcMeJ.table_image;
      EEfbOm.style.backgroundImage = 'url("' + OIBhDm.src + '")';
      if (!NKIIgg.ocNCAH()) {
        EEfbOm.classList.add("transition");
      }
      EEfbOm.style.opacity = "1";
    };
    kJfBld.prototype.FhccEN = function () {
      var pIpMCh = false;
      var nJikla,
        AIIBfA,
        MNehDp = this.LdmPeG.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        AIIBfA = this.LdmPeG[nJikla];
        if (this.aAfghn(AIIBfA)) {
          pIpMCh = true;
        }
      }
      if (pIpMCh) {
        this.KkEMiL.BeDIGn();
      } else if (this.BnkPBg) {
        if (this.lPdHHA.EAflFm) {
          var KPGana;
          var jNEiBG = {};
          jNEiBG.a = this.GeeLHF;
          var GjfdEI = this.fHCfBo[1];
          if (GjfdEI == "carom") {
            EKClpk = this.MoNgbl(0);
            if (EKClpk[1] == 1) {
              KPGana = EKClpk[12];
              if (KPGana[0] > 0) {
                if (KPGana[4] == 0) {
                  EKClpk = this.MoNgbl(1);
                  if (EKClpk[12][5] == 1) {
                    EKClpk = this.MoNgbl(2);
                    if (EKClpk[12][5] == 1) {
                      this.AOCNnD = 1;
                    }
                  }
                }
              }
            }
          } else if (GjfdEI == "bank") {
            EKClpk = this.MoNgbl(0);
            if (EKClpk[1] == 1) {
              KPGana = EKClpk[12];
              if (KPGana[0] > 0) {
                hLGdKD = this.MoNgbl(KPGana[0]);
                if (hLGdKD) {
                  if (hLGdKD[1] != 1 && hLGdKD[12][1] == 1) {
                    this.AOCNnD = KPGana[0];
                  }
                }
              }
            }
          } else if (GjfdEI == "scoreball") {
            EKClpk = this.MoNgbl(0);
            if (EKClpk[1] == 1) {
              KPGana = EKClpk[12][6];
              if (KPGana == 23 || KPGana == 7) {
                this.AOCNnD = 1;
              } else if (
                KPGana == 6 ||
                KPGana == 24 ||
                KPGana == 22 ||
                KPGana == 8
              ) {
                this.AOCNnD = 2;
              }
            }
          }
          if (this.AOCNnD > 0) {
            jNEiBG.s = this.AOCNnD;
          }
          var NGhcmm = [];
          for (nJikla = 0; nJikla < MNehDp; nJikla++) {
            EKClpk = this.LdmPeG[nJikla];
            KPGana = EKClpk[12];
            if (EKClpk[1] == 1) {
              aBLojO = EKClpk[2];
              NGhcmm.push(
                [
                  EKClpk[0],
                  KPGana[0],
                  pBEPNj.lNAdKJ(aBLojO[0], 0),
                  pBEPNj.lNAdKJ(aBLojO[1], 0),
                ].join("#")
              );
            } else if (KPGana[2] >= 0) {
              NGhcmm.push(
                [EKClpk[0], KPGana[0], KPGana[2], KPGana[3], ""].join("#")
              );
            }
          }
          jNEiBG.b = NGhcmm.join("|");
          this.ijmngN.KPeAhF({
            c: "pres",
            v: jNEiBG,
          });
        }
        this.KkEMiL.BeDIGn();
        this.BnkPBg = false;
        this.EGKkOn();
      }
    };
    kJfBld.prototype.aAfghn = function (DeDKln) {
      if (DeDKln[1] != 1) {
        if (DeDKln[10] <= 0) {
          return false;
        }
        DeDKln[10] -= 1;
        this.DKbhJP(DeDKln);
        return true;
      }
      ONBddG = DeDKln[5];
      if (ONBddG <= 0) {
        return false;
      }
      igLkIf = DeDKln[3];
      if (ONBddG <= 0) {
        DeDKln[11] = null;
        DeDKln[5] = 0;
        igLkIf[0] = 0;
        igLkIf[1] = 0;
        BLAZE.DOeCfh.oPPIMG(DeDKln[0]);
        return false;
      }
      ifECaD = DeDKln[8];
      if (ifECaD) {
        gALocH = heeNHP.CoanLA(DeDKln[9] + ONBddG);
        IjBnIK = gALocH % IcoPad;
        gALocH = (gALocH - IjBnIK) / IcoPad;
        DeDKln[9] = IjBnIK;
        if (gALocH > 0) {
          ifECaD.aciHoI(ifECaD.dANKIP() + gALocH);
        } else {
          if (DeDKln[10] == 0) {
            DeDKln[10] = 1;
          } else {
            DeDKln[10] = 0;
            DeDKln[9] = 0;
            ifECaD.aciHoI(ifECaD.dANKIP() + 1);
          }
        }
      }
      gAmDeK.ILFDaD(DeDKln[4], igLkIf);
      gAmDeK.KmKpcl(igLkIf, ONBddG);
      aBLojO = DeDKln[2];
      FmpDmn = gAmDeK.ADJoEM(aBLojO, igLkIf);
      fcBlmE = [0];
      EhiGJm = 99999999;
      kIJfpF = this.CgaDOF[this.HlhNdD(aBLojO)][this.HlhNdD(FmpDmn)];
      if (kIJfpF) {
        gALocH = kIJfpF.length;
        for (IjBnIK = 0; IjBnIK < gALocH; IjBnIK++) {
          kmaGGH = this.CEFolL(kIJfpF[IjBnIK]);
          HKlKeD = this.JJdNoi(aBLojO, FmpDmn, kmaGGH[0], kmaGGH[1]);
          if (HKlKeD) {
            PMhlDk = gAmDeK.hdEOjG(aBLojO, HKlKeD) - FBGiBD;
            if (PMhlDk < 0) {
              PMhlDk = 0;
            }
            if (EhiGJm > PMhlDk) {
              EhiGJm = PMhlDk;
              fcBlmE[0] = 1;
              fcBlmE[1] = kmaGGH[0];
              fcBlmE[2] = kmaGGH[1];
              fcBlmE[3] = PMhlDk;
              fcBlmE[4] = kIJfpF[IjBnIK];
              fcBlmE[5] = HKlKeD;
            }
          }
        }
      }
      IAgCEg = DeDKln[0];
      lpdaLi = ONBddG + this.kGpgAl + JfBDae;
      MopFdB = this.LdmPeG;
      gALocH = MopFdB.length;
      for (IjBnIK = 0; IjBnIK < gALocH; IjBnIK++) {
        hLGdKD = MopFdB[IjBnIK];
        if (hLGdKD[1]) {
          if (hLGdKD[0] != IAgCEg) {
            kmaGGH = this.ahMjFp(
              EhiGJm,
              aBLojO,
              FmpDmn,
              igLkIf,
              ONBddG,
              hLGdKD[2],
              hLGdKD[3]
            );
            if (kmaGGH) {
              EhiGJm = kmaGGH[0];
              fcBlmE[0] = 2;
              fcBlmE[1] = kmaGGH;
              fcBlmE[2] = hLGdKD;
            }
          }
        }
      }
      if (fcBlmE[0] == 1) {
        if (fcBlmE[1][2] > 0) {
          this.kdPnEj("DNDhkK", ONBddG);
          FmpDmn = this.oCoaJF(fcBlmE[1][2]);
          BLAZE.DOeCfh.fdbMpF(IAgCEg, FmpDmn);
          gAmDeK.CoanLA(FmpDmn);
          gAmDeK.ILFDaD(FmpDmn, aBLojO);
          DeDKln[11] = null;
          DeDKln[1] = 0;
          DeDKln[5] = 0;
          ONBddG = 0;
          DeDKln[10] = aiPpkC;
          igLkIf[0] = 0;
          igLkIf[1] = 0;
          kmaGGH = DeDKln[6].nFBFbe;
          gAmDeK.ILFDaD(DeDKln[2], kmaGGH);
          gAmDeK.KmKpcl(kmaGGH, NMibMk);
          DeDKln[12][2] = this.PPNhdP;
          DeDKln[12][3] = fcBlmE[1][2];
          this.PPNhdP++;
        } else {
          if (DeDKln[12][0] < 0) {
            if (DeDKln[12][6] < 0) {
              DeDKln[12][6] = fcBlmE[4];
            }
          }
          if (DeDKln[12][1] < 0) {
            if (fcBlmE[1][0] == fcBlmE[2][0]) {
              DeDKln[12][1] = 1;
            } else if (fcBlmE[1][1] == fcBlmE[2][1]) {
              DeDKln[12][1] = 1;
            }
          }
          if (DeDKln[12][4] < 0) {
            if (DeDKln[12][0] >= 0) {
              DeDKln[12][4] = 0;
            }
          }
          this.kdPnEj("DapfOp", ONBddG);
          if (DeDKln[11]) {
            if (DeDKln[11][0] != 0) {
              DeDKln[11][0] = 0;
            }
            if (DeDKln[11][1] != 0) {
              DeDKln[11][1] = 0;
            }
          }
          FmpDmn = gAmDeK.hhcCkm(DeDKln[4]);
          gAmDeK.KmKpcl(FmpDmn, fcBlmE[3]);
          gAmDeK.dobFPC(FmpDmn, aBLojO);
          BLAZE.DOeCfh.njLNGE(IAgCEg, FmpDmn, fcBlmE[5], ONBddG);
          this.HgNlCE(DeDKln, fcBlmE[1], fcBlmE[2]);
          ONBddG = ONBddG - this.ddLPpb;
          if (ONBddG <= 0) {
            ONBddG = 0;
            igLkIf[0] = 0;
            igLkIf[1] = 0;
          } else {
            gAmDeK.ILFDaD(DeDKln[4], igLkIf);
            gAmDeK.KmKpcl(igLkIf, ONBddG);
            gAmDeK.CoanLA(igLkIf);
          }
        }
      } else if (fcBlmE[0] == 2) {
        DMeMhf = ONBddG;
        kmaGGH = fcBlmE[1];
        FmpDmn = kmaGGH[1];
        if (DeDKln[11]) {
          BAOOEO = ONBddG;
          fmlfgp = gAmDeK.hhcCkm(DeDKln[4]);
        }
        gAmDeK.ILFDaD(kmaGGH[2], igLkIf);
        gAmDeK.CoanLA(igLkIf);
        gAmDeK.ILFDaD(igLkIf, DeDKln[4]);
        gAmDeK.hhEDfj(DeDKln[4]);
        ONBddG = heeNHP.CoanLA(gAmDeK.LPNBNn(igLkIf));
        if (DeDKln[11]) {
          if (DeDKln[11][0] != 0 || DeDKln[11][1] != 0) {
            lplcPg = ONBddG / BAOOEO;
            ONBddG =
              ONBddG * 0.4 +
              BAOOEO * gAmDeK.LPNBNn(DeDKln[11]) * (1 - lplcPg) * 0.4;
            gAmDeK.KmKpcl(DeDKln[4], lplcPg);
            gAmDeK.IkgbJL(fmlfgp, DeDKln[11][3]);
            gAmDeK.KmKpcl(fmlfgp, 1 - lplcPg);
            gAmDeK.dobFPC(DeDKln[4], fmlfgp);
            gAmDeK.hhEDfj(DeDKln[4]);
            gAmDeK.ILFDaD(DeDKln[4], igLkIf);
            gAmDeK.KmKpcl(igLkIf, ONBddG);
            gAmDeK.CoanLA(igLkIf);
            DeDKln[11][0] = 0;
            DeDKln[11][1] = 0;
          }
        }
        if (DeDKln[8]) {
          if (ONBddG > FBGiBD) {
            DeDKln[8].GJiHBl = gAmDeK.andOKf(DeDKln[4]);
          }
        }
        hLGdKD = fcBlmE[2];
        if (hLGdKD[11]) {
          BAOOEO = hLGdKD[5];
          fmlfgp = gAmDeK.hhcCkm(hLGdKD[4]);
        }
        gAmDeK.ILFDaD(kmaGGH[3], hLGdKD[3]);
        gAmDeK.CoanLA(hLGdKD[3]);
        gAmDeK.ILFDaD(hLGdKD[3], hLGdKD[4]);
        gAmDeK.hhEDfj(hLGdKD[4]);
        hLGdKD[5] = heeNHP.CoanLA(gAmDeK.LPNBNn(hLGdKD[3]));
        if (hLGdKD[11]) {
          if (hLGdKD[11][0] != 0 || hLGdKD[11][1] != 0) {
            lplcPg = hLGdKD[5] / BAOOEO;
            hLGdKD[5] =
              hLGdKD[5] * 0.4 +
              BAOOEO * gAmDeK.LPNBNn(hLGdKD[11]) * (1 - lplcPg) * 0.4;
            gAmDeK.KmKpcl(hLGdKD[4], lplcPg);
            gAmDeK.IkgbJL(fmlfgp, hLGdKD[11][3]);
            gAmDeK.KmKpcl(fmlfgp, 1 - lplcPg);
            gAmDeK.dobFPC(hLGdKD[4], fmlfgp);
            gAmDeK.hhEDfj(hLGdKD[4]);
            gAmDeK.ILFDaD(hLGdKD[4], hLGdKD[3]);
            gAmDeK.KmKpcl(hLGdKD[3], hLGdKD[5]);
            gAmDeK.CoanLA(hLGdKD[3]);
            hLGdKD[11][0] = 0;
            hLGdKD[11][1] = 0;
          }
        }
        if (hLGdKD[8]) {
          if (hLGdKD[5] > FBGiBD) {
            hLGdKD[8].GJiHBl = gAmDeK.andOKf(hLGdKD[4]);
          }
        }
        if (ONBddG > hLGdKD[5]) {
          this.kdPnEj("DeDKln", ONBddG);
        } else {
          this.kdPnEj("DeDKln", hLGdKD[5]);
        }
        if (DeDKln[12][4] < 0) {
          if (DeDKln[12][0] >= 0) {
            DeDKln[12][4] = 1;
          }
        }
        if (hLGdKD[12][4] < 0) {
          if (hLGdKD[12][0] >= 0) {
            hLGdKD[12][4] = 1;
          }
        }
        if (DeDKln[12][0] < 0) {
          DeDKln[12][0] = hLGdKD[0];
        }
        if (hLGdKD[12][0] < 0) {
          hLGdKD[12][0] = DeDKln[0];
        }
        if (hLGdKD[0] == 0) {
          DeDKln[12][5] = 1;
        }
        if (DeDKln[0] == 0) {
          hLGdKD[12][5] = 1;
        }
        BLAZE.DOeCfh.kMnEkF(IAgCEg, FmpDmn, hLGdKD[0], hLGdKD[2], DMeMhf);
      }
      if (DeDKln[1]) {
        BLAZE.DOeCfh.ADGAin(IAgCEg, aBLojO, FmpDmn, ONBddG);
      }
      gAmDeK.CoanLA(FmpDmn);
      gAmDeK.ILFDaD(FmpDmn, aBLojO);
      if (DeDKln[11]) {
        gAmDeK.IkgbJL(DeDKln[4], DeDKln[11][2] * (ONBddG / this.cCaCnB));
        gAmDeK.hhEDfj(DeDKln[4]);
        gAmDeK.ILFDaD(DeDKln[4], igLkIf);
        gAmDeK.KmKpcl(igLkIf, ONBddG);
        gAmDeK.CoanLA(igLkIf);
      }
      if (this.cPHnOo == 1) {
        ONBddG = heeNHP.CoanLA(
          ONBddG - (this.hbGgcL + (ONBddG / this.cCaCnB) * this.kDHnLF)
        );
      } else {
        ONBddG = heeNHP.CoanLA(ONBddG - this.hbGgcL);
      }
      DeDKln[5] = ONBddG;
      if (DeDKln[1]) {
        if (ONBddG <= 0) {
          BLAZE.DOeCfh.oPPIMG(IAgCEg);
        }
      }
      this.DKbhJP(DeDKln);
      return true;
    };
    kJfBld.prototype.DKbhJP = function (DeDKln) {
      ecMoLj = DeDKln[6];
      ifECaD = DeDKln[7];
      if (DeDKln[1] != 1) {
        if (DeDKln[10] > 0) {
          if (!ecMoLj.olcjkN) {
            ecMoLj.olcjkN = true;
          }
          gALocH = DeDKln[10];
          IjBnIK = abeaME + (gALocH - 1) * BBMOMl;
          ecMoLj.kpHbnJ = [IjBnIK, IjBnIK];
          IjBnIK = KBMgbN * gALocH;
          ecMoLj.GGkPfl = IjBnIK;
          ifECaD.GGkPfl = IjBnIK;
          ifECaD = DeDKln[8];
          if (ifECaD) {
            ifECaD.GGkPfl = IjBnIK;
          }
        } else if (ecMoLj.olcjkN) {
          ecMoLj.olcjkN = false;
        }
      } else {
        if (!ecMoLj.olcjkN) {
          ecMoLj.olcjkN = true;
        }
        aBLojO = ecMoLj.nFBFbe;
        gAmDeK.ILFDaD(DeDKln[2], aBLojO);
        gAmDeK.KmKpcl(aBLojO, NMibMk);
      }
    };
    kJfBld.prototype.HlhNdD = function (nFBFbe) {
      if (nFBFbe[0] < 0) {
        nFBFbe = [0, nFBFbe[1]];
      } else if (nFBFbe[0] >= gbgEGp[0]) {
        nFBFbe = [gbgEGp[0] - FBGiBD, nFBFbe[1]];
      }
      if (nFBFbe[1] < 0) {
        nFBFbe = [nFBFbe[0], 0];
      } else if (nFBFbe[1] >= gbgEGp[1]) {
        nFBFbe = [nFBFbe[0], gbgEGp[1] - FBGiBD];
      }
      return (
        heeNHP.NgJdlP(nFBFbe[0] / PanInM[0]) +
        heeNHP.NgJdlP(nFBFbe[1] / PanInM[1]) * NJkghD[0]
      );
    };
    kJfBld.prototype.CEFolL = function (IDfMNo) {
      return [this.MEPbdm[IDfMNo], this.MEPbdm[IDfMNo + 1]];
    };
    kJfBld.prototype.oCoaJF = function (dLaPNF) {
      var GApkjE = this.eGCDjK["_" + dLaPNF];
      if (!GApkjE) {
        GApkjE = [0, 0];
      }
      return GApkjE;
    };
    kJfBld.prototype.JJdNoi = function (acmFbI, GKcLeO, gMpCkp, BBbILa) {
      HoAiGf = GKcLeO[1] - acmFbI[1];
      LCmCDL = acmFbI[0] - GKcLeO[0];
      eainEa = gMpCkp[3];
      bNKmKc = gMpCkp[4];
      HMoELa = HoAiGf * bNKmKc - eainEa * LCmCDL;
      if (Math.abs(HMoELa) == 0) {
        return null;
      }
      MDNOhF = acmFbI[0] - gMpCkp[0];
      nKeCMk = acmFbI[1] - gMpCkp[1];
      ajHBNc = MDNOhF * eainEa - nKeCMk * (BBbILa[0] - gMpCkp[0]);
      IhFMmH = ajHBNc / -HMoELa;
      if (IhFMmH < 0 || IhFMmH > 1) {
        return null;
      }
      imhDfA = nKeCMk * LCmCDL - MDNOhF * (acmFbI[1] - GKcLeO[1]);
      bjOIeP = imhDfA / -HMoELa;
      if (bjOIeP < 0 || bjOIeP > 1) {
        return null;
      }
      jljapo = GKcLeO[0] * acmFbI[1] - acmFbI[0] * GKcLeO[1];
      pKODfp = gMpCkp[5];
      return [
        (LCmCDL * pKODfp - bNKmKc * jljapo) / HMoELa,
        (eainEa * jljapo - HoAiGf * pKODfp) / HMoELa,
      ];
    };
    kJfBld.prototype.HgNlCE = function (DeDKln, NAMBdO, nbHMmo) {
      ajHBNc = DeDKln[3];
      imhDfA = NAMBdO[6];
      MDNOhF = nbHMmo[0] - NAMBdO[0];
      nKeCMk = nbHMmo[1] - NAMBdO[1];
      jljapo = -nKeCMk / imhDfA;
      pKODfp = MDNOhF / imhDfA;
      HMoELa = -ajHBNc[0] * jljapo - ajHBNc[1] * pKODfp;
      DeDKln[3][0] = ajHBNc[0] + 2 * jljapo * HMoELa;
      DeDKln[3][1] = ajHBNc[1] + 2 * pKODfp * HMoELa;
      gAmDeK.CoanLA(DeDKln[3]);
      gAmDeK.ILFDaD(DeDKln[3], DeDKln[4]);
      gAmDeK.hhEDfj(DeDKln[4]);
      DeDKln[5] = heeNHP.CoanLA(gAmDeK.LPNBNn(DeDKln[3]));
      if (DeDKln[8]) {
        if (DeDKln[5] > FBGiBD) {
          DeDKln[8].GJiHBl = gAmDeK.andOKf(DeDKln[4]);
        }
      }
    };
    kJfBld.prototype.fifbbg = function (BJhhmA, NAMBdO, nbHMmo) {
      imhDfA = NAMBdO[6];
      MDNOhF = nbHMmo[0] - NAMBdO[0];
      nKeCMk = nbHMmo[1] - NAMBdO[1];
      jljapo = -nKeCMk / imhDfA;
      pKODfp = MDNOhF / imhDfA;
      HMoELa = -BJhhmA[0] * jljapo - BJhhmA[1] * pKODfp;
      ajHBNc = [
        BJhhmA[0] + 2 * jljapo * HMoELa,
        BJhhmA[1] + 2 * pKODfp * HMoELa,
      ];
      gAmDeK.hhEDfj(ajHBNc);
      return ajHBNc;
    };
    kJfBld.prototype.ahMjFp = function (
      ePlGBj,
      FfiHmd,
      oCDIni,
      MKPOOK,
      pkOElI,
      JKBcGp,
      MNJAcE
    ) {
      mKOCDb = gAmDeK.jCckph(FfiHmd, JKBcGp) - gAmDeK.BMHheE(MKPOOK);
      CaLnck = gAmDeK.hdEOjG(FfiHmd, JKBcGp);
      eHajOg = Math.sin(mKOCDb) * CaLnck;
      if (eHajOg <= 0) {
        return null;
      }
      if (eHajOg >= pkOElI) {
        if (eHajOg >= pkOElI + ioDFlJ) {
          return null;
        }
        if (gAmDeK.hdEOjG(oCDIni, JKBcGp) > ioDFlJ) {
          return null;
        }
      }
      cJNdmh = Math.abs(Math.cos(mKOCDb) * CaLnck);
      if (cJNdmh >= ioDFlJ) {
        return null;
      }
      MCNlab = Math.sqrt(KHeDBn - cJNdmh * cJNdmh) - JfBDae;
      if (MCNlab > eHajOg || MCNlab < 0) {
        MCNlab = 0;
      } else {
        MCNlab = eHajOg - MCNlab;
      }
      if (ePlGBj < MCNlab) {
        return null;
      }
      if (pkOElI > 0 && MCNlab > 0) {
        oPmaHg = gAmDeK.hhcCkm(MKPOOK);
        gAmDeK.KmKpcl(oPmaHg, (1.0 / pkOElI) * MCNlab);
        PcccbF = gAmDeK.ADJoEM(FfiHmd, oPmaHg);
      } else {
        PcccbF = gAmDeK.hhcCkm(FfiHmd);
      }
      fmlfgp = gAmDeK.kbKEhc(JKBcGp, PcccbF);
      gAmDeK.ilCGno(fmlfgp);
      gAmDeK.iDmHMA(fmlfgp, ioDFlJ);
      gAmDeK.KmKpcl(
        fmlfgp,
        (MKPOOK[0] - MNJAcE[0]) * fmlfgp[0] +
          (MKPOOK[1] - MNJAcE[1]) * fmlfgp[1]
      );
      return [
        MCNlab,
        PcccbF,
        gAmDeK.kbKEhc(MKPOOK, fmlfgp),
        gAmDeK.ADJoEM(MNJAcE, fmlfgp),
      ];
    };
    kJfBld.prototype.GHBGbI = function (iOdgCn, ppKKGA, gaDmEf, PfEiFM) {
      var nJikla,
        DeDKln,
        MNehDp = this.LdmPeG.length;
      for (nJikla = 0; nJikla < MNehDp; nJikla++) {
        DeDKln = this.LdmPeG[nJikla];
        if (DeDKln[1]) {
          if (DeDKln[0] != gaDmEf && DeDKln[0] != PfEiFM) {
            if (this.DLMpdc(iOdgCn, ppKKGA, DeDKln[2])) {
              return true;
            }
          }
        }
      }
      return false;
    };
    kJfBld.prototype.DLMpdc = function (OjhmIj, LNMaLb, DOboJL) {
      fmlfgp = gAmDeK.kbKEhc(LNMaLb, OjhmIj);
      igLkIf = gAmDeK.LPNBNn(fmlfgp);
      mKOCDb = gAmDeK.jCckph(OjhmIj, DOboJL) - gAmDeK.BMHheE(fmlfgp);
      CaLnck = gAmDeK.hdEOjG(OjhmIj, DOboJL);
      eHajOg = Math.sin(mKOCDb) * CaLnck;
      if (eHajOg <= 0) {
        return false;
      }
      if (eHajOg >= igLkIf) {
        if (eHajOg >= igLkIf + ioDFlJ) {
          return false;
        }
        if (gAmDeK.hdEOjG(LNMaLb, DOboJL) > ioDFlJ) {
          return false;
        }
      }
      cJNdmh = Math.abs(Math.cos(mKOCDb) * CaLnck);
      if (cJNdmh >= ioDFlJ) {
        return false;
      }
      return true;
    };
    kJfBld.prototype.CPFcMg = function (lHFILo) {
      var ppagdo = eCaHCJ.fMcHfj(this.EIefAg);
      if (this.eHDpeC.pgnpck) {
        var jPpcCL = eCaHCJ.piFkGg()[2] * 0.5;
        if (ppagdo[0] > jPpcCL) {
          ppagdo[0] -= this.EIefAg.offsetHeight;
        }
      }
      gAmDeK.AFMEOb(lHFILo, ppagdo);
      gAmDeK.KmKpcl(lHFILo, FBGiBD * (cmbjGA[0] / this.EIefAg.offsetWidth));
      if (this.eHDpeC.pgnpck) {
        var nJikla = lHFILo[1];
        lHFILo[1] = gbgEGp[1] - lHFILo[0];
        lHFILo[0] = nJikla;
      }
      gAmDeK.CoanLA(lHFILo);
    };
    kJfBld.prototype.lGpjEo = function (lHFILo) {
      var ppagdo = eCaHCJ.fMcHfj(this.EIefAg);
      if (this.eHDpeC.pgnpck) {
        var jPpcCL = eCaHCJ.piFkGg()[2] * 0.5;
        if (ppagdo[0] > jPpcCL) {
          ppagdo[0] -= this.EIefAg.offsetHeight;
        }
        var nJikla = lHFILo[0];
        lHFILo[0] = gbgEGp[1] - lHFILo[1];
        lHFILo[1] = nJikla;
      }
      gAmDeK.iDmHMA(lHFILo, FBGiBD * (cmbjGA[0] / this.EIefAg.offsetWidth));
      gAmDeK.dobFPC(lHFILo, ppagdo);
      gAmDeK.CoanLA(lHFILo);
    };
    kJfBld.prototype.fgjdEE = function (lHFILo) {
      var ppagdo = eCaHCJ.fMcHfj(this.EIefAg);
      gAmDeK.iDmHMA(lHFILo, FBGiBD * (cmbjGA[0] / this.EIefAg.offsetWidth));
      gAmDeK.dobFPC(lHFILo, ppagdo);
      gAmDeK.CoanLA(lHFILo);
    };
    kJfBld.prototype.kdPnEj = function (eigFEF, OmAlnd) {
      if (this.feMpEJ >= AjghmE) {
        return;
      }
      this.feMpEJ++;
      OmAlnd = OmAlnd / this.cCaCnB;
      if (eigFEF == "DeDKln") {
        if (OmAlnd > 0.7) {
          eigFEF = "mKNnaG";
        } else if (OmAlnd > 0.3) {
          OmAlnd += 0.3;
          eigFEF = "DbDNjJ";
        } else {
          OmAlnd = OmAlnd * 2 + 0.2;
          eigFEF = "iFBNbk";
        }
      } else if (eigFEF == "DNDhkK") {
        OmAlnd += 0.2;
      } else if (eigFEF == "knblMN") {
        if (OmAlnd < 0.2) {
          OmAlnd = 0.2;
        }
      }
      this.knekDK(eigFEF, OmAlnd);
    };
    kJfBld.prototype.knekDK = function (eigFEF, cfAlNK) {
      var BPAjkL = hgeDgn[eigFEF];
      if (!BPAjkL) {
        $warn(eigFEF);
        return;
      }
      if (cfAlNK > 0.85) {
        cfAlNK = 1;
      } else if (cfAlNK < 0.15) {
        return;
      }
      if (BPAjkL.length == 1) {
        HEOfca.lBHHDa(BPAjkL[0], cfAlNK, false, 0, false);
      } else {
        HEOfca.lBHHDa(BPAjkL.random(), cfAlNK, false, 0, false);
      }
    };
    return function () {
      return new lPdHHA(new kJfBld(arguments));
    };
  })();
  BLAZE.jOOBfb = jOOBfb;
})(BLAZE || (BLAZE = {}));
