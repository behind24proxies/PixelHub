// hey , it's 2am here , I will never come back to fix this mess, I'm sorry
// but hey at least it works (I think)
import "./App.css";
import { useState } from "react";
import Y2020 from "./components/Y2020";
import Y2019 from "./components/Y2019";
// import Y2018 from "./components/Y2018";
// import Y2017 from "./components/Y2017";
// import Y2016 from "./components/Y2016";
// import Y2015 from "./components/Y2015";
// import Y2014 from "./components/Y2014";
// import Y2013 from "./components/Y2013";
// import Y2012 from "./components/Y2012";
// import Y2011 from "./components/Y2011";
// import Y2010 from "./components/Y2010";
import $ from "jquery";
import jQuery from "jquery";

(function ($) {
  $.fn.niceSelect = function (method) {
    if (typeof method == "string") {
      if (method == "update") {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next(".nice-select");
          var open = $dropdown.hasClass("open");

          if ($dropdown.length) {
            $dropdown.remove();
            create_nice_select($select);

            if (open) {
              $select.next().trigger("click");
            }
          }
        });
      } else if (method == "destroy") {
        this.each(function () {
          var $select = $(this);
          var $dropdown = $(this).next(".nice-select");

          if ($dropdown.length) {
            $dropdown.remove();
            $select.css("display", "");
          }
        });
        if ($(".nice-select").length == 0) {
          $(document).off(".nice_select");
        }
      } else {
        console.log('Method "' + method + '" does not exist.');
      }
      return this;
    }

    this.hide();

    this.each(function () {
      var $select = $(this);

      if (!$select.next().hasClass("nice-select")) {
        create_nice_select($select);
      }
    });

    function create_nice_select($select) {
      $select.after(
        $("<div></div>")
          .addClass("nice-select")
          .addClass($select.attr("class") || "")
          .addClass($select.attr("disabled") ? "disabled" : "")
          .attr("tabindex", $select.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );

      var $dropdown = $select.next();
      var $options = $select.find("option");
      var $selected = $select.find("option:selected");

      $dropdown
        .find(".current")
        .html($selected.data("display") || $selected.text());

      $options.each(function (i) {
        var $option = $(this);
        var display = $option.data("display");

        $dropdown.find("ul").append(
          $("<li></li>")
            .attr("data-value", $option.val())
            .attr("data-display", display || null)
            .addClass(
              "option" +
                ($option.is(":selected") ? " selected" : "") +
                ($option.is(":disabled") ? " disabled" : "")
            )
            .html($option.text())
        );
      });
    }

    $(document).off(".nice_select");

    $(document).on("click.nice_select", ".nice-select", function (event) {
      var $dropdown = $(this);

      $(".nice-select").not($dropdown).removeClass("open");
      $dropdown.toggleClass("open");

      if ($dropdown.hasClass("open")) {
        $dropdown.find(".option");
        $dropdown.find(".focus").removeClass("focus");
        $dropdown.find(".selected").addClass("focus");
      } else {
        $dropdown.focus();
      }
    });

    $(document).on("click.nice_select", function (event) {
      if ($(event.target).closest(".nice-select").length === 0) {
        $(".nice-select").removeClass("open").find(".option");
      }
    });

    $(document).on(
      "click.nice_select",
      ".nice-select .option:not(.disabled)",
      function (event) {
        var $option = $(this);
        var $dropdown = $option.closest(".nice-select");

        $dropdown.find(".selected").removeClass("selected");
        $option.addClass("selected");

        var text = $option.data("display") || $option.text();
        $dropdown.find(".current").text(text);

        $dropdown.prev("select").val($option.data("value")).trigger("change");
      }
    );

    $(document).on("keydown.nice_select", ".nice-select", function (event) {
      var $dropdown = $(this);
      var $focused_option = $(
        $dropdown.find(".focus") || $dropdown.find(".list .option.selected")
      );

      if (event.keyCode == 32 || event.keyCode == 13) {
        if ($dropdown.hasClass("open")) {
          $focused_option.trigger("click");
        } else {
          $dropdown.trigger("click");
        }
        return false;
      } else if (event.keyCode == 40) {
        if (!$dropdown.hasClass("open")) {
          $dropdown.trigger("click");
        } else {
          var $next = $focused_option.nextAll(".option:not(.disabled)").first();
          if ($next.length > 0) {
            $dropdown.find(".focus").removeClass("focus");
            $next.addClass("focus");
          }
        }
        return false;
      } else if (event.keyCode == 38) {
        if (!$dropdown.hasClass("open")) {
          $dropdown.trigger("click");
        } else {
          var $prev = $focused_option.prevAll(".option:not(.disabled)").first();
          if ($prev.length > 0) {
            $dropdown.find(".focus").removeClass("focus");
            $prev.addClass("focus");
          }
        }
        return false;
      } else if (event.keyCode == 27) {
        if ($dropdown.hasClass("open")) {
          $dropdown.trigger("click");
        }
      } else if (event.keyCode == 9) {
        if ($dropdown.hasClass("open")) {
          return false;
        }
      }
    });

    var style = document.createElement("a").style;
    style.cssText = "pointer-events:auto";
    if (style.pointerEvents !== "auto") {
      $("html").addClass("no-csspointerevents");
    }

    return this;
  };
})(jQuery);

function Switch(props) {
  if (props.number == "Y2020") {
    return <Y2020 {...props} />;
  } else if (props.number == "Y2019") {
    return <Y2019 {...props} />;
  } 
  // else if (props.number == "Y2018") {
  //   return <Y2018 {...props} />;
  // } else if (props.number == "Y2017") {
  //   return <Y2017 {...props} />;
  // } else if (props.number == "Y2016") {
  //   return <Y2016 {...props} />;
  // } else if (props.number == "Y2015") {
  //   return <Y2015 {...props} />;
  // } else if (props.number == "Y2014") {
  //   return <Y2014 {...props} />;
  // } else if (props.number == "Y2013") {
  //   return <Y2013 {...props} />;
  // } else if (props.number == "Y2012") {
  //   return <Y2012 {...props} />;
  // } else if (props.number == "Y2011") {
  //   return <Y2011 {...props} />;
  // } else if (props.number == "Y2010") {
  //   return <Y2010 {...props} />;
  // }
}
function App() {
  const [color, setColor] = useState("zero");
  const [oldE, setOldE] = useState("");
  const [xs, setX] = useState(1);
  const [year, setYear] = useState("Y2020");
  const [jned, setJned] = useState("");
  const [rick, setRick] = useState("hidden");
  const [roll, setRoll] = useState("hidden");
  const [idk1, setIdk1] = useState("hidden");
  const [idk2, setIdk2] = useState("hidden");
  const callback = (jned) => {
    setJned(jned);
    setRoll("rick");
    setIdk2("payload");
  };

  const cherry = () => {
    const curr = document.getElementsByClassName("current");
    console.log(curr[0].innerHTML);
    setYear("Y" + curr[0].innerHTML);
  };
  return (
    <div className="App">
      <div className="main-container">
        <div className="container2">
          <div className="curryear zero">
            <h5>{year.replace("Y", "")}</h5>
          </div>

          {<Switch number={year} color={color} callback={callback} />}
          <div className="buttons">
            <div
              className="colour zero button"
              onClick={(e) => {
                setColor("zero");
                setOldE(e);
                if (oldE != "") oldE.target.classList.toggle("bordered");
                e.target.classList.add("bordered");
              }}
            ></div>
            <div
              className="colour one button"
              onClick={(e) => {
                setColor("one");
                setOldE(e);
                if (oldE != "") oldE.target.classList.toggle("bordered");
                e.target.classList.add("bordered");
              }}
            ></div>
            <div
              className="colour two button"
              onClick={(e) => {
                setColor("two");
                setOldE(e);
                if (oldE != "") oldE.target.classList.toggle("bordered");
                e.target.classList.add("bordered");
              }}
            ></div>
            <div
              className="colour three button"
              onClick={(e) => {
                setColor("three");
                setOldE(e);
                if (oldE != "") oldE.target.classList.toggle("bordered");
                e.target.classList.add("bordered");
              }}
            ></div>
            <div
              className="colour four button"
              onClick={(e) => {
                setColor("four");
                setOldE(e);
                if (oldE != "") oldE.target.classList.toggle("bordered");
                e.target.classList.add("bordered");
              }}
            ></div>
          </div>
          <div className={idk2}>{jned}</div>
          <div
            className={roll}
            onClick={(e) => {
              setRick("");
              setRoll("hidden");
            }}
          >
            copy
          </div>
          <a
            href="https://t.ly/OOFJ"
            target="_blank"
            className={rick}
            onClick={(e) => {
              setRick("hidden");
              setIdk1("copyit");
            }}
          >
            <div className="pero">copy</div>
          </a>
          <p className={idk1}>copy it yourself</p>
        </div>
        <div className="changer">
          <select id="select0" onChange={(e) => setX(xs + 1)}>
            <option value="Y2020">2020</option>
            <option value="Y2019">2019</option>
            {/* <option value="Y2018">2018</option>
            <option value="Y2017">2017</option>
            <option value="Y2016">2016</option>
            <option value="Y2015">2015</option>
            <option value="Y2014">2014</option>
            <option value="Y2013">2013</option>
            <option value="Y2012">2012</option>
            <option value="Y2011">2011</option>
            <option value="Y2010">2010</option> */}
          </select>
          <div className="changer1" onClick={cherry}>
            change Year
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

$(document).ready(function () {
  document.title = "PixelHub"
  $("select").niceSelect();
  // // get all rect elements and add mouseenter listener to each one 
  // var rects = document.querySelectorAll("rect");
  // for (var i = 0; i < rects.length; i++) {
  //   rects[i].addEventListener("mouseenter", function (e) {
  //     // get the data-date attribute from the rect element
  //     var date = e.target.getAttribute("data-date");
  //     // get the element with the matching data-date attribute
  //     var element = document.querySelector("[data-date='" + date + "']");
  //     // add the hover class to the element
  //     element.classList.add("hover");
  //   });
  //   rects[i].addEventListener("mouseleave", function (e) {
  //     // get the data-date attribute from the rect element
  //     var date = e.target.getAttribute("data-date");
  //     // get the element with the matching data-date attribute
  //     var element = document.querySelector("[data-date='" + date + "']");
  //     // remove the hover class from the element
  //     element.classList.remove("hover");
  //   });
  // }
});
