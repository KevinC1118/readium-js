var initializationTest = function (bookType) {
    
    if (bookType === "fixed") {
        var packageDocumentXML = '<?xml version="1.0" encoding="UTF-8"?> \
    <package xmlns="http://www.idpf.org/2007/opf" prefix="cc: http://creativecommons.org/ns# rendition: http://www.idpf.org/vocab/rendition/#" version="3.0" unique-identifier="bookid" xml:lang="fr" dir="ltr" id="package"> \
        <metadata xmlns:dc="http://purl.org/dc/elements/1.1/"> \
          <dc:identifier id="bookid">code.google.com.epub-samples.page-blanche</dc:identifier> \
          <meta refines="#bookid" property="identifier-type" scheme="onix:codelist5">01</meta> \
          <dc:language>fr</dc:language> \
          <dc:title id="title">Page Blanche</dc:title> \
          <meta refines="#title" property="title-type">main</meta> \
          <dc:creator id="creator1">Boulet</dc:creator> \
          <meta refines="#creator1" property="file-as">Boulet</meta> \
          <meta refines="#creator1" property="role" scheme="marc:relators">aut</meta> \
          <meta refines="#creator1" property="display-seq">1</meta> \
          <dc:creator id="creator2">Bagieu Pénélope</dc:creator> \
          <meta refines="#creator2" property="file-as">Bagieu, Pénélope</meta> \
          <meta refines="#creator2" property="role" scheme="marc:relators">ill</meta> \
          <meta refines="#creator2" property="display-seq">2</meta> \
          <dc:publisher>éditions Delcourt</dc:publisher> \
          <dc:date>2012-01-18</dc:date> \
            <dc:rights xml:lang="en">This work is shared with the public using the Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) license.</dc:rights> \
            <link rel="cc:license" href="http://creativecommons.org/licenses/by-sa/3.0/"/> \
            <dc:contributor id="contributor">Vincent Gros</dc:contributor> \
            <meta refines="#contributor" property="role" scheme="marc:relators">mrk</meta> \
            <meta refines="#contributor" property="file-as">Gros, Vincent</meta> \
            <meta property="dcterms:modified">2012-08-28T18:00:00Z</meta> \
          <meta property="rendition:layout">pre-paginated</meta> \
          <meta property="rendition:orientation">auto</meta> \
          <meta property="rendition:spread">auto</meta> \
          <meta name="cover" content="cover"/> \
       </metadata> \
       <manifest> \
          <item id="css" href="Style/style.css" media-type="text/css"/> \
          <item id="nav" href="Navigation/nav.xhtml" properties="nav" media-type="application/xhtml+xml"/> \
          <item id="ncx" href="Navigation/toc.ncx" media-type="application/x-dtbncx+xml" /> \
          <item id="id-cover-xhtml" href="Content/cover.xhtml" media-type="application/xhtml+xml"/> \
          <item id="white-xhtml" href="Content/PageBlanche_Page_000.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-PageBlanche_Page_001-xhtml" href="Content/PageBlanche_Page_001.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-PageBlanche_Page_002-xhtml" href="Content/PageBlanche_Page_002.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-PageBlanche_Page_003-xhtml" href="Content/PageBlanche_Page_003.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-PageBlanche_Page_004-xhtml" href="Content/PageBlanche_Page_004.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-PageBlanche_Page_005-xhtml" href="Content/PageBlanche_Page_005.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-PageBlanche_Page_006-xhtml" href="Content/PageBlanche_Page_006.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-PageBlanche_Page_007-xhtml" href="Content/PageBlanche_Page_007.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-PageBlanche_Page_008-xhtml" href="Content/PageBlanche_Page_008.xhtml" media-type="application/xhtml+xml"/> \
          <item id="id-cover-jpg" href="Image/cover.jpg" properties="cover-image" media-type="image/jpeg"/> \
          <item id="id-PageBlanche_Page_001-jpg" href="Image/PageBlanche_Page_001.jpg" media-type="image/jpeg"/> \
          <item id="id-PageBlanche_Page_002-jpg" href="Image/PageBlanche_Page_002.jpg" media-type="image/jpeg"/> \
          <item id="id-PageBlanche_Page_003-jpg" href="Image/PageBlanche_Page_003.jpg" media-type="image/jpeg"/> \
          <item id="id-PageBlanche_Page_004-jpg" href="Image/PageBlanche_Page_004.jpg" media-type="image/jpeg"/> \
          <item id="id-PageBlanche_Page_005-jpg" href="Image/PageBlanche_Page_005.jpg" media-type="image/jpeg"/> \
          <item id="id-PageBlanche_Page_006-jpg" href="Image/PageBlanche_Page_006.jpg" media-type="image/jpeg"/> \
          <item id="id-PageBlanche_Page_007-jpg" href="Image/PageBlanche_Page_007.jpg" media-type="image/jpeg"/> \
          <item id="id-PageBlanche_Page_008-jpg" href="Image/PageBlanche_Page_008.jpg" media-type="image/jpeg"/> \
       </manifest> \
       <spine toc="ncx"> \
          <itemref idref="id-cover-xhtml" properties="page-spread-left"/> \
          <itemref idref="white-xhtml" properties="page-spread-right"/> \
          <itemref idref="id-PageBlanche_Page_001-xhtml" properties="page-spread-left"/> \
          <itemref idref="id-PageBlanche_Page_002-xhtml" properties="page-spread-right"/> \
          <itemref idref="id-PageBlanche_Page_003-xhtml" properties="page-spread-left"/> \
          <itemref idref="id-PageBlanche_Page_004-xhtml" properties="page-spread-right"/> \
          <itemref idref="id-PageBlanche_Page_005-xhtml" properties="page-spread-left"/> \
          <itemref idref="id-PageBlanche_Page_006-xhtml" properties="page-spread-right"/> \
          <itemref idref="id-PageBlanche_Page_007-xhtml" properties="page-spread-left"/> \
          <itemref idref="id-PageBlanche_Page_008-xhtml" properties="page-spread-right"/> \
       </spine> \
    </package>'
  

    var epubParser = new EpubParserModule("epub_content/page-blanche-20121022/EPUB/package.opf", packageDocumentXML);
    var packageDocumentObject = epubParser.parse();
    var epub = new EpubModule(packageDocumentObject, packageDocumentXML);
    var spineInfo = epub.getSpineInfo();
    var spineObjects = spineInfo.spine;

    var viewerSettings = {
        fontSize : 12,
        syntheticLayout : true,
        currentMargin : 3,
        tocVisible : false,
        currentTheme : "default"
    };

    var packDocDOM = (new window.DOMParser()).parseFromString(packageDocumentXML, "text/xml");

    return new EpubReaderModule(
        $("#reader"),
        spineInfo,
        viewerSettings,
        packDocDOM,
        "eager"
    );
  }
  else if (bookType === "reflowable") {

      var reader; 
	  var packageDocumentXML;
	  
      $.ajax({
        url : "/view_testing/epub_content/moby_dick/OPS/package.opf",
        async : false,
		error : function (xhr, status) {
            
			packageDocumentXML = '<?xml version="1.0" encoding="UTF-8"?> \
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" xml:lang="en" unique-identifier="pub-id" prefix="cc: http://creativecommons.org/ns#"> \
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/"> \
    <dc:title id="title">Moby-Dick</dc:title> \
    <meta refines="#title" property="title-type">main</meta> \
    <dc:creator id="creator">Herman Melville</dc:creator> \
    <meta refines="#creator" property="file-as">MELVILLE, HERMAN</meta> \
    <meta refines="#creator" property="role" scheme="marc:relators">aut</meta> \
    <dc:identifier id="pub-id">code.google.com.epub-samples.moby-dick-basic</dc:identifier> \
    <dc:language>en-US</dc:language> \
    <meta property="dcterms:modified">2012-01-18T12:47:00Z</meta> \
    <dc:publisher>Harper &amp; Brothers, Publishers</dc:publisher> \
    <dc:contributor id="contrib1">Dave Cramer</dc:contributor> \
    <meta refines="#contrib1" property="role" scheme="marc:relators">mrk</meta> \
    <dc:rights>This work is shared with the public using the Attribution-ShareAlike 3.0 Unported (CC BY-SA 3.0) license.</dc:rights>         \
    <link rel="cc:license" href="http://creativecommons.org/licenses/by-sa/3.0/"/> \
    <meta property="cc:attributionURL">http://code.google.com/p/epub-samples/</meta> \
  </metadata> \
  <manifest> \
    <item id="font.stix.regular" href="fonts/STIXGeneral.otf" \
      media-type="application/vnd.ms-opentype"/> \
    <item id="font.stix.italic" href="fonts/STIXGeneralItalic.otf" \
      media-type="application/vnd.ms-opentype"/> \
    <item id="font.stix.bold" href="fonts/STIXGeneralBol.otf" \
      media-type="application/vnd.ms-opentype"/> \
    <item id="font.stix.bold.italic" href="fonts/STIXGeneralBolIta.otf" \
      media-type="application/vnd.ms-opentype"/> \
    <item id="toc" properties="nav" href="toc.xhtml" media-type="application/xhtml+xml"/> \
    <item id="copyright" href="copyright.xhtml" media-type="application/xhtml+xml"/> \
    <item id="titlepage" href="titlepage.xhtml" media-type="application/xhtml+xml"/> \
    <item id="cover" href="cover.xhtml" media-type="application/xhtml+xml"/> \
    <item id="cover-image" properties="cover-image" href="images/9780316000000.jpg" \
      media-type="image/jpeg"/> \
    <item id="style" href="css/stylesheet.css" media-type="text/css"/> \
    <item id="aMoby-Dick_FE_title_page" href="images/Moby-Dick_FE_title_page.jpg" \
      media-type="image/jpeg"/> \
    <item id="xpreface_001" href="preface_001.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xintroduction_001" href="introduction_001.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xepigraph_001" href="epigraph_001.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_001" href="chapter_001.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_002" href="chapter_002.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_003" href="chapter_003.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_004" href="chapter_004.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_005" href="chapter_005.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_006" href="chapter_006.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_007" href="chapter_007.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_008" href="chapter_008.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_009" href="chapter_009.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_010" href="chapter_010.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_011" href="chapter_011.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_012" href="chapter_012.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_013" href="chapter_013.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_014" href="chapter_014.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_015" href="chapter_015.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_016" href="chapter_016.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_017" href="chapter_017.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_018" href="chapter_018.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_019" href="chapter_019.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_020" href="chapter_020.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_021" href="chapter_021.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_022" href="chapter_022.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_023" href="chapter_023.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_024" href="chapter_024.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_025" href="chapter_025.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_026" href="chapter_026.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_027" href="chapter_027.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_028" href="chapter_028.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_029" href="chapter_029.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_030" href="chapter_030.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_031" href="chapter_031.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_032" href="chapter_032.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_033" href="chapter_033.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_034" href="chapter_034.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_035" href="chapter_035.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_036" href="chapter_036.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_037" href="chapter_037.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_038" href="chapter_038.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_039" href="chapter_039.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_040" href="chapter_040.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_041" href="chapter_041.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_042" href="chapter_042.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_043" href="chapter_043.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_044" href="chapter_044.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_045" href="chapter_045.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_046" href="chapter_046.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_047" href="chapter_047.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_048" href="chapter_048.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_049" href="chapter_049.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_050" href="chapter_050.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_051" href="chapter_051.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_052" href="chapter_052.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_053" href="chapter_053.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_054" href="chapter_054.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_055" href="chapter_055.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_056" href="chapter_056.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_057" href="chapter_057.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_058" href="chapter_058.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_059" href="chapter_059.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_060" href="chapter_060.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_061" href="chapter_061.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_062" href="chapter_062.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_063" href="chapter_063.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_064" href="chapter_064.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_065" href="chapter_065.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_066" href="chapter_066.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_067" href="chapter_067.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_068" href="chapter_068.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_069" href="chapter_069.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_070" href="chapter_070.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_071" href="chapter_071.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_072" href="chapter_072.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_073" href="chapter_073.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_074" href="chapter_074.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_075" href="chapter_075.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_076" href="chapter_076.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_077" href="chapter_077.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_078" href="chapter_078.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_079" href="chapter_079.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_080" href="chapter_080.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_081" href="chapter_081.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_082" href="chapter_082.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_083" href="chapter_083.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_084" href="chapter_084.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_085" href="chapter_085.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_086" href="chapter_086.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_087" href="chapter_087.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_088" href="chapter_088.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_089" href="chapter_089.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_090" href="chapter_090.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_091" href="chapter_091.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_092" href="chapter_092.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_093" href="chapter_093.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_094" href="chapter_094.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_095" href="chapter_095.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_096" href="chapter_096.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_097" href="chapter_097.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_098" href="chapter_098.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_099" href="chapter_099.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_100" href="chapter_100.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_101" href="chapter_101.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_102" href="chapter_102.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_103" href="chapter_103.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_104" href="chapter_104.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_105" href="chapter_105.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_106" href="chapter_106.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_107" href="chapter_107.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_108" href="chapter_108.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_109" href="chapter_109.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_110" href="chapter_110.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_111" href="chapter_111.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_112" href="chapter_112.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_113" href="chapter_113.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_114" href="chapter_114.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_115" href="chapter_115.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_116" href="chapter_116.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_117" href="chapter_117.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_118" href="chapter_118.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_119" href="chapter_119.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_120" href="chapter_120.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_121" href="chapter_121.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_122" href="chapter_122.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_123" href="chapter_123.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_124" href="chapter_124.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_125" href="chapter_125.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_126" href="chapter_126.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_127" href="chapter_127.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_128" href="chapter_128.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_129" href="chapter_129.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_130" href="chapter_130.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_131" href="chapter_131.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_132" href="chapter_132.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_133" href="chapter_133.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_134" href="chapter_134.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_135" href="chapter_135.xhtml" media-type="application/xhtml+xml"/> \
    <item id="xchapter_136" href="chapter_136.xhtml" media-type="application/xhtml+xml"/> \
    <item id="brief-toc" href="toc-short.xhtml" media-type="application/xhtml+xml"/> \
 \
    <!--  \
    <item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/> \
 --> \
 \
  </manifest> \
  <spine> \
    <itemref idref="cover" linear="no"/> \
    <itemref idref="titlepage" linear="yes"/> \
    <itemref idref="brief-toc" linear="yes"/> \
    <itemref linear="yes" idref="xpreface_001"/> \
    <itemref linear="yes" idref="xintroduction_001"/> \
    <itemref linear="yes" idref="xepigraph_001"/> \
    <itemref linear="yes" idref="xchapter_001"/> \
    <itemref linear="yes" idref="xchapter_002"/> \
    <itemref linear="yes" idref="xchapter_003"/> \
    <itemref linear="yes" idref="xchapter_004"/> \
    <itemref linear="yes" idref="xchapter_005"/> \
    <itemref linear="yes" idref="xchapter_006"/> \
    <itemref linear="yes" idref="xchapter_007"/> \
    <itemref linear="yes" idref="xchapter_008"/> \
    <itemref linear="yes" idref="xchapter_009"/> \
    <itemref linear="yes" idref="xchapter_010"/> \
    <itemref linear="yes" idref="xchapter_011"/> \
    <itemref linear="yes" idref="xchapter_012"/> \
    <itemref linear="yes" idref="xchapter_013"/> \
    <itemref linear="yes" idref="xchapter_014"/> \
    <itemref linear="yes" idref="xchapter_015"/> \
    <itemref linear="yes" idref="xchapter_016"/> \
    <itemref linear="yes" idref="xchapter_017"/> \
    <itemref linear="yes" idref="xchapter_018"/> \
    <itemref linear="yes" idref="xchapter_019"/> \
    <itemref linear="yes" idref="xchapter_020"/> \
    <itemref linear="yes" idref="xchapter_021"/> \
    <itemref linear="yes" idref="xchapter_022"/> \
    <itemref linear="yes" idref="xchapter_023"/> \
    <itemref linear="yes" idref="xchapter_024"/> \
    <itemref linear="yes" idref="xchapter_025"/> \
    <itemref linear="yes" idref="xchapter_026"/> \
    <itemref linear="yes" idref="xchapter_027"/> \
    <itemref linear="yes" idref="xchapter_028"/> \
    <itemref linear="yes" idref="xchapter_029"/> \
    <itemref linear="yes" idref="xchapter_030"/> \
    <itemref linear="yes" idref="xchapter_031"/> \
    <itemref linear="yes" idref="xchapter_032"/> \
    <itemref linear="yes" idref="xchapter_033"/> \
    <itemref linear="yes" idref="xchapter_034"/> \
    <itemref linear="yes" idref="xchapter_035"/> \
    <itemref linear="yes" idref="xchapter_036"/> \
    <itemref linear="yes" idref="xchapter_037"/> \
    <itemref linear="yes" idref="xchapter_038"/> \
    <itemref linear="yes" idref="xchapter_039"/> \
    <itemref linear="yes" idref="xchapter_040"/> \
    <itemref linear="yes" idref="xchapter_041"/> \
    <itemref linear="yes" idref="xchapter_042"/> \
    <itemref linear="yes" idref="xchapter_043"/> \
    <itemref linear="yes" idref="xchapter_044"/> \
    <itemref linear="yes" idref="xchapter_045"/> \
    <itemref linear="yes" idref="xchapter_046"/> \
    <itemref linear="yes" idref="xchapter_047"/> \
    <itemref linear="yes" idref="xchapter_048"/> \
    <itemref linear="yes" idref="xchapter_049"/> \
    <itemref linear="yes" idref="xchapter_050"/> \
    <itemref linear="yes" idref="xchapter_051"/> \
    <itemref linear="yes" idref="xchapter_052"/> \
    <itemref linear="yes" idref="xchapter_053"/> \
    <itemref linear="yes" idref="xchapter_054"/> \
    <itemref linear="yes" idref="xchapter_055"/> \
    <itemref linear="yes" idref="xchapter_056"/> \
    <itemref linear="yes" idref="xchapter_057"/> \
    <itemref linear="yes" idref="xchapter_058"/> \
    <itemref linear="yes" idref="xchapter_059"/> \
    <itemref linear="yes" idref="xchapter_060"/> \
    <itemref linear="yes" idref="xchapter_061"/> \
    <itemref linear="yes" idref="xchapter_062"/> \
    <itemref linear="yes" idref="xchapter_063"/> \
    <itemref linear="yes" idref="xchapter_064"/> \
    <itemref linear="yes" idref="xchapter_065"/> \
    <itemref linear="yes" idref="xchapter_066"/> \
    <itemref linear="yes" idref="xchapter_067"/> \
    <itemref linear="yes" idref="xchapter_068"/> \
    <itemref linear="yes" idref="xchapter_069"/> \
    <itemref linear="yes" idref="xchapter_070"/> \
    <itemref linear="yes" idref="xchapter_071"/> \
    <itemref linear="yes" idref="xchapter_072"/> \
    <itemref linear="yes" idref="xchapter_073"/> \
    <itemref linear="yes" idref="xchapter_074"/> \
    <itemref linear="yes" idref="xchapter_075"/> \
    <itemref linear="yes" idref="xchapter_076"/> \
    <itemref linear="yes" idref="xchapter_077"/> \
    <itemref linear="yes" idref="xchapter_078"/> \
    <itemref linear="yes" idref="xchapter_079"/> \
    <itemref linear="yes" idref="xchapter_080"/> \
    <itemref linear="yes" idref="xchapter_081"/> \
    <itemref linear="yes" idref="xchapter_082"/> \
    <itemref linear="yes" idref="xchapter_083"/> \
    <itemref linear="yes" idref="xchapter_084"/> \
    <itemref linear="yes" idref="xchapter_085"/> \
    <itemref linear="yes" idref="xchapter_086"/> \
    <itemref linear="yes" idref="xchapter_087"/> \
    <itemref linear="yes" idref="xchapter_088"/> \
    <itemref linear="yes" idref="xchapter_089"/> \
    <itemref linear="yes" idref="xchapter_090"/> \
    <itemref linear="yes" idref="xchapter_091"/> \
    <itemref linear="yes" idref="xchapter_092"/> \
    <itemref linear="yes" idref="xchapter_093"/> \
    <itemref linear="yes" idref="xchapter_094"/> \
    <itemref linear="yes" idref="xchapter_095"/> \
    <itemref linear="yes" idref="xchapter_096"/> \
    <itemref linear="yes" idref="xchapter_097"/> \
    <itemref linear="yes" idref="xchapter_098"/> \
    <itemref linear="yes" idref="xchapter_099"/> \
    <itemref linear="yes" idref="xchapter_100"/> \
    <itemref linear="yes" idref="xchapter_101"/> \
    <itemref linear="yes" idref="xchapter_102"/> \
    <itemref linear="yes" idref="xchapter_103"/> \
    <itemref linear="yes" idref="xchapter_104"/> \
    <itemref linear="yes" idref="xchapter_105"/> \
    <itemref linear="yes" idref="xchapter_106"/> \
    <itemref linear="yes" idref="xchapter_107"/> \
    <itemref linear="yes" idref="xchapter_108"/> \
    <itemref linear="yes" idref="xchapter_109"/> \
    <itemref linear="yes" idref="xchapter_110"/> \
    <itemref linear="yes" idref="xchapter_111"/> \
    <itemref linear="yes" idref="xchapter_112"/> \
    <itemref linear="yes" idref="xchapter_113"/> \
    <itemref linear="yes" idref="xchapter_114"/> \
    <itemref linear="yes" idref="xchapter_115"/> \
    <itemref linear="yes" idref="xchapter_116"/> \
    <itemref linear="yes" idref="xchapter_117"/> \
    <itemref linear="yes" idref="xchapter_118"/> \
    <itemref linear="yes" idref="xchapter_119"/> \
    <itemref linear="yes" idref="xchapter_120"/> \
    <itemref linear="yes" idref="xchapter_121"/> \
    <itemref linear="yes" idref="xchapter_122"/> \
    <itemref linear="yes" idref="xchapter_123"/> \
    <itemref linear="yes" idref="xchapter_124"/> \
    <itemref linear="yes" idref="xchapter_125"/> \
    <itemref linear="yes" idref="xchapter_126"/> \
    <itemref linear="yes" idref="xchapter_127"/> \
    <itemref linear="yes" idref="xchapter_128"/> \
    <itemref linear="yes" idref="xchapter_129"/> \
    <itemref linear="yes" idref="xchapter_130"/> \
    <itemref linear="yes" idref="xchapter_131"/> \
    <itemref linear="yes" idref="xchapter_132"/> \
    <itemref linear="yes" idref="xchapter_133"/> \
    <itemref linear="yes" idref="xchapter_134"/> \
    <itemref linear="yes" idref="xchapter_135"/> \
    <itemref linear="yes" idref="xchapter_136"/> \
    <itemref idref="copyright" linear="yes"/> \
    <itemref idref="toc" linear="no"/> \
  </spine> \
</package>';
		},
        success : function (result) {
            
          packageDocumentXML = result;
        }
      });
    
      var epubParser = new EpubParserModule("epub_content/moby_dick/OPS/package.opf", packageDocumentXML);
      var packageDocumentObject = epubParser.parse();
      var epub = new EpubModule(packageDocumentObject, packageDocumentXML);
      var spineInfo = epub.getSpineInfo();
      var spineObjects = spineInfo.spine;

      var viewerSettings = {
          fontSize : 12,
          syntheticLayout : false,
          currentMargin : 3,
          tocVisible : false,
          currentTheme : "default"
      };

      var packDocDOM = (new window.DOMParser()).parseFromString(packageDocumentXML, "text/xml");
      
      reader = new EpubReaderModule(
          $("#reader"),
          spineInfo,
          viewerSettings,
          packDocDOM,
          "lazy"
      );

      return reader;
    }
    else if (bookType === "mixed") {

        var packageDocumentXML = '<?xml version="1.0" encoding="UTF-8"?> \
<package xmlns="http://www.idpf.org/2007/opf" version="3.0" xml:lang="en" unique-identifier="uid" prefix="rendition: http://www.idpf.org/vocab/rendition/# cc: http://creativecommons.org/ns#"> \
  <metadata xmlns:dc="http://purl.org/dc/elements/1.1/"> \
    <dc:title id="title">Thomas Cole - The Voyage of Life</dc:title> \
    <dc:creator>Jesse Dylan</dc:creator> \
    <dc:identifier id="uid">code.google.com.epub-samples.cole-voyage-of-life</dc:identifier> \
    <dc:language>en-US</dc:language> \
    <meta property="dcterms:modified">2012-03-20T11:37:00Z</meta> \
    <dc:rights>This work is licensed under a Creative Commons Attribution-ShareAlike 3.0 Unported License.</dc:rights> \
    <link rel="cc:license" href="http://creativecommons.org/licenses/by-sa/3.0/"/> \
    <link rel="cc:attributionURL" href="http://en.wikipedia.org/wiki/The_Voyage_of_Life"/> \
  </metadata> \
  <manifest> \
    <item id="i" href="xhtml/0-intro.xhtml" media-type="application/xhtml+xml"/> \
    <item id="s1a" href="xhtml/1a-childhood-text.xhtml" media-type="application/xhtml+xml" /> \
    <item id="s1b" href="xhtml/1b-childhood-painting.xhtml" media-type="application/xhtml+xml" /> \
    <item id="s2a" href="xhtml/2a-youth-text.xhtml" media-type="application/xhtml+xml" /> \
    <item id="s2b" href="xhtml/2b-youth-painting.xhtml" media-type="application/xhtml+xml" /> \
    <item id="s3a" href="xhtml/3a-manhood-text.xhtml" media-type="application/xhtml+xml" /> \
    <item id="s3b" href="xhtml/3b-manhood-painting.xhtml" media-type="application/xhtml+xml" /> \
    <item id="s4a" href="xhtml/4a-oldage-text.xhtml" media-type="application/xhtml+xml" /> \
    <item id="s4b" href="xhtml/4b-oldage-painting.xhtml" media-type="application/xhtml+xml" /> \
    <item id="s5" href="xhtml/5-significance.xhtml" media-type="application/xhtml+xml" /> \
    <item id="j1_320" href="images/1-childhood-320.jpg" media-type="image/jpeg"/> \
    <item id="j1_1024" href="images/1-childhood-1024.jpg" media-type="image/jpeg"/> \
    <item id="j2_320" href="images/2-youth-320.jpg" media-type="image/jpeg"/> \
    <item id="j2_1024" href="images/2-youth-1024.jpg" media-type="image/jpeg"/> \
    <item id="j3_320" href="images/3-manhood-320.jpg" media-type="image/jpeg"/> \
    <item id="j3_1024" href="images/3-manhood-1024.jpg" media-type="image/jpeg"/> \
    <item id="j4_320" href="images/4-oldage-320.jpg" media-type="image/jpeg"/> \
    <item id="j4_1024" href="images/4-oldage-1024.jpg" media-type="image/jpeg"/> \
    <item id="prt" href="images/portrait.jpg" media-type="image/jpeg" properties="cover-image"/> \
    <item id="nav" href="xhtml/nav.xhtml" media-type="application/xhtml+xml" properties="nav"/> \
    <item id="css" href="css/cole.css" media-type="text/css"/> \
  </manifest> \
  <spine> \
    <itemref idref="i"/> \
    <itemref idref="s1a"/> \
    <itemref idref="s1b" properties="rendition:layout-pre-paginated rendition:orientation-landscape rendition:spread-none"/> \
    <itemref idref="s2a"/> \
    <itemref idref="s2b" properties="rendition:layout-pre-paginated rendition:orientation-landscape rendition:spread-none"/> \
    <itemref idref="s3a"/> \
    <itemref idref="s3b" properties="rendition:layout-pre-paginated rendition:orientation-landscape rendition:spread-none"/> \
    <itemref idref="s4a"/> \
    <itemref idref="s4b" properties="rendition:layout-pre-paginated rendition:orientation-landscape rendition:spread-none"/> \
    <itemref idref="s5"/> \
  </spine> \
</package>'

        var epubParser = new EpubParserModule("epub_content/cole-voyage-of-life-20120320/EPUB/cole.opf", packageDocumentXML);
        var packageDocumentObject = epubParser.parse();
        var epub = new EpubModule(packageDocumentObject, packageDocumentXML);
        var spineInfo = epub.getSpineInfo();
        var spineObjects = spineInfo.spine;

        var viewerSettings = {
            fontSize : 12,
            syntheticLayout : false,
            currentMargin : 3,
            tocVisible : false,
            currentTheme : "default"
        };

        var packDocDOM = (new window.DOMParser()).parseFromString(packageDocumentXML, "text/xml");
        
        return new EpubReaderModule(
            $("#reader"),
            spineInfo,
            viewerSettings,
            packDocDOM,
            "lazy"
        );
    }
};