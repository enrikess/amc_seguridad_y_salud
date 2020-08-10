"use strict";
var KTDatatablesBasicBasic= {
    init:function() {
        var e;
        (e=$("#kt_table_1")).DataTable( {
            responsive:!0, dom:"<'row'<'col-sm-12'tr>>\n\t\t\t<'row'<'col-sm-12 col-md-5'i><'col-sm-12 col-md-7 dataTables_pager'lp>>", lengthMenu:[5, 10, 25, 50], pageLength:10, language: {
                lengthMenu: "Display _MENU_"
            }
            , order:[[1, "desc"]], headerCallback:function(e, t, a, s, n) {
                e.getElementsByTagName("th")[0].innerHTML='\n                    <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid">\n                        <input type="checkbox" value="" class="kt-group-checkable">\n                        <span></span>\n                    </label>'
            }
            , columnDefs:[ {
                targets:0, width:"30px", className:"dt-right", orderable:!1, render:function(e, t, a, s) {
                    return'\n                        <label class="kt-checkbox kt-checkbox--single kt-checkbox--solid">\n                            <input type="checkbox" value="" class="kt-checkable">\n                            <span></span>\n                        </label>'
                }
            }
            , {
                targets:-1, title:"Actions", orderable:!1, render:function(e, t, a, s) {
                    return'\n                        <span class="dropdown">\n                            <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" data-toggle="dropdown" aria-expanded="true">\n                              <i class="la la-ellipsis-h"></i>\n                            </a>\n                            <div class="dropdown-menu dropdown-menu-right">\n                                <a class="dropdown-item" href="#"><i class="la la-edit"></i> Edit Details</a>\n                                <a class="dropdown-item" href="#"><i class="la la-leaf"></i> Update Status</a>\n                                <a class="dropdown-item" href="#"><i class="la la-print"></i> Generate Report</a>\n                            </div>\n                        </span>\n                        <a href="#" class="btn btn-sm btn-clean btn-icon btn-icon-md" title="View">\n                          <i class="la la-edit"></i>\n                        </a>'
                }
            }
            , {
                targets:8, render:function(e, t, a, s) {
                    var n= {
                        1: {
                            title: "Pending", class: "kt-badge--brand"
                        }
                        , 2: {
                            title: "Delivered", class: " kt-badge--danger"
                        }
                        , 3: {
                            title: "Canceled", class: " kt-badge--primary"
                        }
                        , 4: {
                            title: "Success", class: " kt-badge--success"
                        }
                        , 5: {
                            title: "Info", class: " kt-badge--info"
                        }
                        , 6: {
                            title: "Danger", class: " kt-badge--danger"
                        }
                        , 7: {
                            title: "Warning", class: " kt-badge--warning"
                        }
                    }
                    ;
                    return void 0===n[e]?e:'<span class="kt-badge '+n[e].class+' kt-badge--inline kt-badge--pill">'+n[e].title+"</span>"
                }
            }
            , {
                targets:9, render:function(e, t, a, s) {
                    var n= {
                        1: {
                            title: "Online", state: "danger"
                        }
                        , 2: {
                            title: "Retail", state: "primary"
                        }
                        , 3: {
                            title: "Direct", state: "success"
                        }
                    }
                    ;
                    return void 0===n[e]?e:'<span class="kt-badge kt-badge--'+n[e].state+' kt-badge--dot"></span>&nbsp;<span class="kt-font-bold kt-font-'+n[e].state+'">'+n[e].title+"</span>"
                }
            }
            ]
        }
        ),
        e.on("change", ".kt-group-checkable", function() {
            var e=$(this).closest("table").find("td:first-child .kt-checkable"), t=$(this).is(":checked");
            $(e).each(function() {
                t?($(this).prop("checked", !0), $(this).closest("tr").addClass("active")): ($(this).prop("checked", !1), $(this).closest("tr").removeClass("active"))
            }
            )
        }
        ),
        e.on("change", "tbody tr .kt-checkbox", function() {
            $(this).parents("tr").toggleClass("active")
        }
        )
    }
}

;
jQuery(document).ready(function() {
    KTDatatablesBasicBasic.init()
}

);
