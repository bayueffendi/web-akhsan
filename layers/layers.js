var wms_layers = [];

var format_BATASDESA_0 = new ol.format.GeoJSON();
var features_BATASDESA_0 = format_BATASDESA_0.readFeatures(json_BATASDESA_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BATASDESA_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BATASDESA_0.addFeatures(features_BATASDESA_0);
var lyr_BATASDESA_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BATASDESA_0, 
                style: style_BATASDESA_0,
                popuplayertitle: "BATAS DESA",
                interactive: true,
    title: 'BATAS DESA<br />\
    <img src="styles/legend/BATASDESA_0_0.png" /> SAWAH<br />\
    <img src="styles/legend/BATASDESA_0_1.png" /> <br />\
    <img src="styles/legend/BATASDESA_0_2.png" /> BUKIT<br />\
    <img src="styles/legend/BATASDESA_0_3.png" /> RT 1 RW 1<br />\
    <img src="styles/legend/BATASDESA_0_4.png" /> RT 2 RW 1<br />\
    <img src="styles/legend/BATASDESA_0_5.png" /> TERMINAL BUS BUMIAYU<br />\
    <img src="styles/legend/BATASDESA_0_6.png" /> RT 3 RW 1<br />\
    <img src="styles/legend/BATASDESA_0_7.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_8.png" /> RT 05 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_9.png" /> RT 06 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_10.png" /> RT 07 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_11.png" /> RT 08 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_12.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_13.png" /> RT 01 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_14.png" /> RT 04 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_15.png" /> RT 04 RW 1<br />\
    <img src="styles/legend/BATASDESA_0_16.png" /> RT 05 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_17.png" /> RT 06 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_18.png" /> RT 07 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_19.png" /> RT 8 RW 01<br />\
    <img src="styles/legend/BATASDESA_0_20.png" /> RT 02 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_21.png" /> RT 03 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_22.png" /> RT 04 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_23.png" /> RT 05 RW O2<br />\
    <img src="styles/legend/BATASDESA_0_24.png" /> RT 06 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_25.png" /> RT 07 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_26.png" /> RT 08 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_27.png" /> RT 09 RW 02<br />\
    <img src="styles/legend/BATASDESA_0_28.png" /> RT O1 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_29.png" /> RT 02 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_30.png" /> RT 03 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_31.png" /> RT 04 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_32.png" /> RT 05 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_33.png" /> RT 06 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_34.png" /> RT 07 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_35.png" /> RT 08 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_36.png" /> RT 09 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_37.png" /> RT 10 RW 03<br />\
    <img src="styles/legend/BATASDESA_0_38.png" /> HUTAN<br />\
    <img src="styles/legend/BATASDESA_0_39.png" /> TOKO BANGUNAN<br />\
    <img src="styles/legend/BATASDESA_0_40.png" /> STUDIO<br />\
    <img src="styles/legend/BATASDESA_0_41.png" /> MASJID AL-HIKMAH<br />\
    <img src="styles/legend/BATASDESA_0_42.png" /> PONDOK PESANTREN SH SHAFF ADISANA<br />\
    <img src="styles/legend/BATASDESA_0_43.png" />  WISATA SPOT ADISANA<br />\
    <img src="styles/legend/BATASDESA_0_44.png" /> LAPANGAN BOLA ADISANA<br />\
    <img src="styles/legend/BATASDESA_0_45.png" /> MASJID AL -MUTAQIN<br />\
    <img src="styles/legend/BATASDESA_0_46.png" /> LAPANGAN SE GE SIDAMUKTI<br />\
    <img src="styles/legend/BATASDESA_0_47.png" /> PEMAKAMAN UMUM DK.KAPUTIHAN ADISANA<br />\
    <img src="styles/legend/BATASDESA_0_48.png" /> MASJID AT TAQWA DK KAPUTIHAN ADISANA<br />\
    <img src="styles/legend/BATASDESA_0_49.png" /> BPT 5 PDAM TIRTA BARIBIS UNIT<br />'
        });
var format_JALAN_1 = new ol.format.GeoJSON();
var features_JALAN_1 = format_JALAN_1.readFeatures(json_JALAN_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_JALAN_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_JALAN_1.addFeatures(features_JALAN_1);
var lyr_JALAN_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_JALAN_1, 
                style: style_JALAN_1,
                popuplayertitle: "JALAN",
                interactive: true,
                title: '<img src="styles/legend/JALAN_1.png" /> JALAN'
            });
var format_adisana_bumiayu_point_2 = new ol.format.GeoJSON();
var features_adisana_bumiayu_point_2 = format_adisana_bumiayu_point_2.readFeatures(json_adisana_bumiayu_point_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_adisana_bumiayu_point_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_adisana_bumiayu_point_2.addFeatures(features_adisana_bumiayu_point_2);
var lyr_adisana_bumiayu_point_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_adisana_bumiayu_point_2, 
                style: style_adisana_bumiayu_point_2,
                popuplayertitle: "adisana_bumiayu_point",
                interactive: true,
    title: 'adisana_bumiayu_point<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_0.png" /> Adisana<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_1.png" /> Bidan Uma Cholifah, S.ST., M.Kes.<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_2.png" /> Bumiayu<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_3.png" /> Dukuhturi<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_4.png" /> Kantor Kelurahan Adisana<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_5.png" /> LAPANGAN BOLA ADISANA<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_6.png" /> LAPANGAN SEGA SIDAMUKTI<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_7.png" /> MASJID AL-MUTAQIN<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_8.png" /> MASJID AT TAQWA DK KAPUTIHAN ADISANA<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_9.png" /> Masjid Baiturrahim<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_10.png" /> Masjid Darul Arqom<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_11.png" /> Mushola Darussalam<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_12.png" /> PDAM TIRTA BARIBIS UNIT<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_13.png" /> PEMAKAMAN UMUM DK.KAPUTIHAN ADISANA<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_14.png" /> RUMAH AKHSAN<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_15.png" /> Sakalibel<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_16.png" /> SDN Adisana 04<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_17.png" /> MASJID AL-HIKMAH<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_18.png" /> SDN ADISANA 1<br />\
    <img src="styles/legend/adisana_bumiayu_point_2_19.png" /> TERMINAL BUS BUMIAYU<br />'
        });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: "Clipped",
                interactive: true,
                title: '<img src="styles/legend/Clipped_3.png" /> Clipped'
            });
var format_ADMINISTRASIDESA_AR_25K_4 = new ol.format.GeoJSON();
var features_ADMINISTRASIDESA_AR_25K_4 = format_ADMINISTRASIDESA_AR_25K_4.readFeatures(json_ADMINISTRASIDESA_AR_25K_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ADMINISTRASIDESA_AR_25K_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ADMINISTRASIDESA_AR_25K_4.addFeatures(features_ADMINISTRASIDESA_AR_25K_4);
var lyr_ADMINISTRASIDESA_AR_25K_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ADMINISTRASIDESA_AR_25K_4, 
                style: style_ADMINISTRASIDESA_AR_25K_4,
                popuplayertitle: "ADMINISTRASIDESA_AR_25K",
                interactive: true,
                title: '<img src="styles/legend/ADMINISTRASIDESA_AR_25K_4.png" /> ADMINISTRASIDESA_AR_25K'
            });

lyr_BATASDESA_0.setVisible(true);lyr_JALAN_1.setVisible(true);lyr_adisana_bumiayu_point_2.setVisible(true);lyr_Clipped_3.setVisible(true);lyr_ADMINISTRASIDESA_AR_25K_4.setVisible(true);
var layersList = [lyr_BATASDESA_0,lyr_JALAN_1,lyr_adisana_bumiayu_point_2,lyr_Clipped_3,lyr_ADMINISTRASIDESA_AR_25K_4];
lyr_BATASDESA_0.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', });
lyr_JALAN_1.set('fieldAliases', {'id': 'id', 'NAMA': 'NAMA', 'LEBAR': 'LEBAR', });
lyr_adisana_bumiayu_point_2.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'historic': 'historic', 'status': 'status', 'toilets_ha': 'toilets_ha', 'emergency': 'emergency', 'access': 'access', 'health_fac': 'health_fac', 'amenity': 'amenity', 'backup_gen': 'backup_gen', 'beds': 'beds', 'access_roo': 'access_roo', 'layer': 'layer', 'population': 'population', 'healthcare': 'healthcare', 'parking': 'parking', 'health_f_1': 'health_f_1', 'roof_mater': 'roof_mater', 'name': 'name', 'addr_postc': 'addr_postc', 'leisure': 'leisure', 'isced_leve': 'isced_leve', 'surface': 'surface', 'waterway': 'waterway', 'addr_house': 'addr_house', 'health_f_2': 'health_f_2', 'rooms': 'rooms', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'staff_coun': 'staff_coun', 'tourism': 'tourism', 'denominati': 'denominati', 'communicat': 'communicat', 'name_sw': 'name_sw', 'opening_ho': 'opening_ho', 'religion': 'religion', 'toilets_di': 'toilets_di', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'staff_co_1': 'staff_co_1', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'power': 'power', 'covered': 'covered', 'operator_t': 'operator_t', 'name_fr': 'name_fr', 'boundary': 'boundary', 'width': 'width', 'network': 'network', 'shop': 'shop', 'place': 'place', 'oneway': 'oneway', 'is_in': 'is_in', 'barrier': 'barrier', 'communic_1': 'communic_1', 'medical_sy': 'medical_sy', 'building': 'building', 'capacity': 'capacity', 'name_en': 'name_en', 'operator': 'operator', 'bridge': 'bridge', 'aeroway': 'aeroway', 'fuel': 'fuel', 'government': 'government', 'public_tra': 'public_tra', 'water': 'water', 'tower': 'tower', });
lyr_Clipped_3.set('fieldAliases', {'osm_id': 'osm_id', 'osm_type': 'osm_type', 'admin_leve': 'admin_leve', 'historic': 'historic', 'status': 'status', 'toilets_ha': 'toilets_ha', 'emergency': 'emergency', 'access': 'access', 'health_fac': 'health_fac', 'amenity': 'amenity', 'backup_gen': 'backup_gen', 'beds': 'beds', 'access_roo': 'access_roo', 'layer': 'layer', 'population': 'population', 'healthcare': 'healthcare', 'parking': 'parking', 'health_f_1': 'health_f_1', 'roof_mater': 'roof_mater', 'name': 'name', 'addr_postc': 'addr_postc', 'leisure': 'leisure', 'isced_leve': 'isced_leve', 'surface': 'surface', 'waterway': 'waterway', 'addr_house': 'addr_house', 'health_f_2': 'health_f_2', 'rooms': 'rooms', 'depth': 'depth', 'blockage': 'blockage', 'pump': 'pump', 'tunnel': 'tunnel', 'building_m': 'building_m', 'landuse': 'landuse', 'office': 'office', 'addr_stree': 'addr_stree', 'military': 'military', 'staff_coun': 'staff_coun', 'tourism': 'tourism', 'denominati': 'denominati', 'communicat': 'communicat', 'name_sw': 'name_sw', 'opening_ho': 'opening_ho', 'religion': 'religion', 'toilets_di': 'toilets_di', 'highway': 'highway', 'diameter': 'diameter', 'natural': 'natural', 'staff_co_1': 'staff_co_1', 'smoothness': 'smoothness', 'railway': 'railway', 'man_made': 'man_made', 'power': 'power', 'covered': 'covered', 'operator_t': 'operator_t', 'name_fr': 'name_fr', 'boundary': 'boundary', 'width': 'width', 'network': 'network', 'shop': 'shop', 'place': 'place', 'oneway': 'oneway', 'is_in': 'is_in', 'barrier': 'barrier', 'communic_1': 'communic_1', 'medical_sy': 'medical_sy', 'building': 'building', 'capacity': 'capacity', 'name_en': 'name_en', 'operator': 'operator', 'bridge': 'bridge', 'aeroway': 'aeroway', 'fuel': 'fuel', 'government': 'government', 'public_tra': 'public_tra', 'water': 'water', 'tower': 'tower', });
lyr_ADMINISTRASIDESA_AR_25K_4.set('fieldAliases', {'KDPPUM': 'KDPPUM', 'NAMOBJ': 'NAMOBJ', 'REMARK': 'REMARK', 'KDPBPS': 'KDPBPS', 'FCODE': 'FCODE', 'LUASWH': 'LUASWH', 'UUPP': 'UUPP', 'SRS_ID': 'SRS_ID', 'LCODE': 'LCODE', 'METADATA': 'METADATA', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDBBPS': 'KDBBPS', 'KDBPUM': 'KDBPUM', 'WADMKD': 'WADMKD', 'WIADKD': 'WIADKD', 'WADMKC': 'WADMKC', 'WIADKC': 'WIADKC', 'WADMKK': 'WADMKK', 'WIADKK': 'WIADKK', 'WADMPR': 'WADMPR', 'WIADPR': 'WIADPR', 'TIPADM': 'TIPADM', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_BATASDESA_0.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', });
lyr_JALAN_1.set('fieldImages', {'id': 'TextEdit', 'NAMA': 'TextEdit', 'LEBAR': 'TextEdit', });
lyr_adisana_bumiayu_point_2.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_leve': 'TextEdit', 'historic': 'TextEdit', 'status': 'TextEdit', 'toilets_ha': 'TextEdit', 'emergency': 'TextEdit', 'access': 'TextEdit', 'health_fac': 'TextEdit', 'amenity': 'TextEdit', 'backup_gen': 'TextEdit', 'beds': 'TextEdit', 'access_roo': 'TextEdit', 'layer': 'TextEdit', 'population': 'TextEdit', 'healthcare': 'TextEdit', 'parking': 'TextEdit', 'health_f_1': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'addr_postc': 'TextEdit', 'leisure': 'TextEdit', 'isced_leve': 'TextEdit', 'surface': 'TextEdit', 'waterway': 'TextEdit', 'addr_house': 'TextEdit', 'health_f_2': 'TextEdit', 'rooms': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'staff_coun': 'TextEdit', 'tourism': 'TextEdit', 'denominati': 'TextEdit', 'communicat': 'TextEdit', 'name_sw': 'TextEdit', 'opening_ho': 'TextEdit', 'religion': 'TextEdit', 'toilets_di': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'staff_co_1': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'power': 'TextEdit', 'covered': 'TextEdit', 'operator_t': 'TextEdit', 'name_fr': 'TextEdit', 'boundary': 'TextEdit', 'width': 'TextEdit', 'network': 'TextEdit', 'shop': 'TextEdit', 'place': 'TextEdit', 'oneway': 'TextEdit', 'is_in': 'TextEdit', 'barrier': 'TextEdit', 'communic_1': 'TextEdit', 'medical_sy': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'name_en': 'TextEdit', 'operator': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'fuel': 'TextEdit', 'government': 'TextEdit', 'public_tra': 'TextEdit', 'water': 'TextEdit', 'tower': 'TextEdit', });
lyr_Clipped_3.set('fieldImages', {'osm_id': 'TextEdit', 'osm_type': 'TextEdit', 'admin_leve': 'TextEdit', 'historic': 'TextEdit', 'status': 'TextEdit', 'toilets_ha': 'TextEdit', 'emergency': 'TextEdit', 'access': 'TextEdit', 'health_fac': 'TextEdit', 'amenity': 'TextEdit', 'backup_gen': 'TextEdit', 'beds': 'TextEdit', 'access_roo': 'TextEdit', 'layer': 'TextEdit', 'population': 'TextEdit', 'healthcare': 'TextEdit', 'parking': 'TextEdit', 'health_f_1': 'TextEdit', 'roof_mater': 'TextEdit', 'name': 'TextEdit', 'addr_postc': 'TextEdit', 'leisure': 'TextEdit', 'isced_leve': 'TextEdit', 'surface': 'TextEdit', 'waterway': 'TextEdit', 'addr_house': 'TextEdit', 'health_f_2': 'TextEdit', 'rooms': 'TextEdit', 'depth': 'TextEdit', 'blockage': 'TextEdit', 'pump': 'TextEdit', 'tunnel': 'TextEdit', 'building_m': 'TextEdit', 'landuse': 'TextEdit', 'office': 'TextEdit', 'addr_stree': 'TextEdit', 'military': 'TextEdit', 'staff_coun': 'TextEdit', 'tourism': 'TextEdit', 'denominati': 'TextEdit', 'communicat': 'TextEdit', 'name_sw': 'TextEdit', 'opening_ho': 'TextEdit', 'religion': 'TextEdit', 'toilets_di': 'TextEdit', 'highway': 'TextEdit', 'diameter': 'TextEdit', 'natural': 'TextEdit', 'staff_co_1': 'TextEdit', 'smoothness': 'TextEdit', 'railway': 'TextEdit', 'man_made': 'TextEdit', 'power': 'TextEdit', 'covered': 'TextEdit', 'operator_t': 'TextEdit', 'name_fr': 'TextEdit', 'boundary': 'TextEdit', 'width': 'TextEdit', 'network': 'TextEdit', 'shop': 'TextEdit', 'place': 'TextEdit', 'oneway': 'TextEdit', 'is_in': 'TextEdit', 'barrier': 'TextEdit', 'communic_1': 'TextEdit', 'medical_sy': 'TextEdit', 'building': 'TextEdit', 'capacity': 'TextEdit', 'name_en': 'TextEdit', 'operator': 'TextEdit', 'bridge': 'TextEdit', 'aeroway': 'TextEdit', 'fuel': 'TextEdit', 'government': 'TextEdit', 'public_tra': 'TextEdit', 'water': 'TextEdit', 'tower': 'TextEdit', });
lyr_ADMINISTRASIDESA_AR_25K_4.set('fieldImages', {'KDPPUM': 'TextEdit', 'NAMOBJ': 'TextEdit', 'REMARK': 'TextEdit', 'KDPBPS': 'TextEdit', 'FCODE': 'TextEdit', 'LUASWH': 'TextEdit', 'UUPP': 'TextEdit', 'SRS_ID': 'TextEdit', 'LCODE': 'TextEdit', 'METADATA': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDBPUM': 'TextEdit', 'WADMKD': 'TextEdit', 'WIADKD': 'TextEdit', 'WADMKC': 'TextEdit', 'WIADKC': 'TextEdit', 'WADMKK': 'TextEdit', 'WIADKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADPR': 'TextEdit', 'TIPADM': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr_BATASDESA_0.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', });
lyr_JALAN_1.set('fieldLabels', {'id': 'no label', 'NAMA': 'no label', 'LEBAR': 'no label', });
lyr_adisana_bumiayu_point_2.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'admin_leve': 'no label', 'historic': 'no label', 'status': 'no label', 'toilets_ha': 'no label', 'emergency': 'no label', 'access': 'no label', 'health_fac': 'no label', 'amenity': 'no label', 'backup_gen': 'no label', 'beds': 'no label', 'access_roo': 'no label', 'layer': 'no label', 'population': 'no label', 'healthcare': 'no label', 'parking': 'no label', 'health_f_1': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'addr_postc': 'no label', 'leisure': 'no label', 'isced_leve': 'no label', 'surface': 'no label', 'waterway': 'no label', 'addr_house': 'no label', 'health_f_2': 'no label', 'rooms': 'no label', 'depth': 'no label', 'blockage': 'no label', 'pump': 'no label', 'tunnel': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'staff_coun': 'no label', 'tourism': 'no label', 'denominati': 'no label', 'communicat': 'no label', 'name_sw': 'no label', 'opening_ho': 'no label', 'religion': 'no label', 'toilets_di': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'staff_co_1': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'power': 'no label', 'covered': 'no label', 'operator_t': 'no label', 'name_fr': 'no label', 'boundary': 'no label', 'width': 'no label', 'network': 'no label', 'shop': 'no label', 'place': 'no label', 'oneway': 'no label', 'is_in': 'no label', 'barrier': 'no label', 'communic_1': 'no label', 'medical_sy': 'no label', 'building': 'no label', 'capacity': 'no label', 'name_en': 'no label', 'operator': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'fuel': 'no label', 'government': 'no label', 'public_tra': 'no label', 'water': 'no label', 'tower': 'no label', });
lyr_Clipped_3.set('fieldLabels', {'osm_id': 'no label', 'osm_type': 'no label', 'admin_leve': 'no label', 'historic': 'no label', 'status': 'no label', 'toilets_ha': 'no label', 'emergency': 'no label', 'access': 'no label', 'health_fac': 'no label', 'amenity': 'no label', 'backup_gen': 'no label', 'beds': 'no label', 'access_roo': 'no label', 'layer': 'no label', 'population': 'no label', 'healthcare': 'no label', 'parking': 'no label', 'health_f_1': 'no label', 'roof_mater': 'no label', 'name': 'no label', 'addr_postc': 'no label', 'leisure': 'no label', 'isced_leve': 'no label', 'surface': 'no label', 'waterway': 'no label', 'addr_house': 'no label', 'health_f_2': 'no label', 'rooms': 'no label', 'depth': 'no label', 'blockage': 'no label', 'pump': 'no label', 'tunnel': 'no label', 'building_m': 'no label', 'landuse': 'no label', 'office': 'no label', 'addr_stree': 'no label', 'military': 'no label', 'staff_coun': 'no label', 'tourism': 'no label', 'denominati': 'no label', 'communicat': 'no label', 'name_sw': 'no label', 'opening_ho': 'no label', 'religion': 'no label', 'toilets_di': 'no label', 'highway': 'no label', 'diameter': 'no label', 'natural': 'no label', 'staff_co_1': 'no label', 'smoothness': 'no label', 'railway': 'no label', 'man_made': 'no label', 'power': 'no label', 'covered': 'no label', 'operator_t': 'no label', 'name_fr': 'no label', 'boundary': 'no label', 'width': 'no label', 'network': 'no label', 'shop': 'no label', 'place': 'no label', 'oneway': 'no label', 'is_in': 'no label', 'barrier': 'no label', 'communic_1': 'no label', 'medical_sy': 'no label', 'building': 'no label', 'capacity': 'no label', 'name_en': 'no label', 'operator': 'no label', 'bridge': 'no label', 'aeroway': 'no label', 'fuel': 'no label', 'government': 'no label', 'public_tra': 'no label', 'water': 'no label', 'tower': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_4.set('fieldLabels', {'KDPPUM': 'no label', 'NAMOBJ': 'no label', 'REMARK': 'no label', 'KDPBPS': 'no label', 'FCODE': 'no label', 'LUASWH': 'no label', 'UUPP': 'no label', 'SRS_ID': 'no label', 'LCODE': 'no label', 'METADATA': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDBBPS': 'no label', 'KDBPUM': 'no label', 'WADMKD': 'no label', 'WIADKD': 'no label', 'WADMKC': 'no label', 'WIADKC': 'no label', 'WADMKK': 'no label', 'WIADKK': 'no label', 'WADMPR': 'no label', 'WIADPR': 'no label', 'TIPADM': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_ADMINISTRASIDESA_AR_25K_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});