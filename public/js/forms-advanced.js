$(function () {
  var t = $("#basicNoUISlider");
  0 < t.length &&
    noUiSlider.create(t[0], {
      start: [20, 80],
      range: { min: [0], max: [100] },
    });
  var e = $("#stepNoUISlider");
  0 < e.length &&
    noUiSlider.create(e[0], {
      start: [200, 1e3],
      range: { min: [0], max: [1800] },
      step: 100,
      tooltips: !0,
      connect: !0,
    }),
    $(".input-datepicker").datepicker({ format: "mm/dd/yyyy" }),
    $(".input-datepicker-autoclose").datepicker({
      autoclose: !0,
      format: "mm/dd/yyyy",
    }),
    $(".input-datepicker-multiple").datepicker({
      multidate: !0,
      format: "mm/dd/yyyy",
    }),
    $(".input-datepicker-range").datepicker({ format: "mm/dd/yyyy" }),
    $("input[name='touchspin0']").TouchSpin({
      buttondown_class: "btn btn-secondary",
      buttonup_class: "btn btn-secondary",
    }),
    $("input[name='touchspin1']").TouchSpin({
      min: 0,
      max: 100,
      step: 0.1,
      decimals: 2,
      boostat: 5,
      maxboostedstep: 10,
      postfix: "%",
      buttondown_class: "btn btn-secondary",
      buttonup_class: "btn btn-secondary",
    }),
    $("input[name='touchspin2']").TouchSpin({
      min: -1e9,
      max: 1e9,
      step: 50,
      maxboostedstep: 1e7,
      prefix: "$",
      buttondown_class: "btn btn-secondary",
      buttonup_class: "btn btn-secondary",
    }),
    $(".selectpicker-primary").selectpicker({ style: "btn-primary", size: 4 }),
    $(".selectpicker-secondary").selectpicker({
      style: "btn-secondary",
      size: 4,
    }),
    $(".selectpicker-light").selectpicker({
      style: "btn-outline-light",
      size: 4,
    }),
    $("#multiselect1").multiSelect();
});
