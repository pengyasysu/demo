//结束时间是1422788461000
//开始时间设置为1422784461000，相差4000秒
jQuery.fn.countdown = function(userOptions) {
  // Default options
  var options = {
    endTime: [2015, 0, 0, 0, 0, 0],
    timerEnd: function() {},
    serverUrl: "http:xx",
    serverTime: 20000
  };
  var timeArray = [],
    where = this,
    countGet = 0,
    timer,
    nMS;


  var createElements = function(array) {
    var str = [];
    for (var i = 0; i < 3; i++) {
      str[i] = "<span>" + array[i] + "</span>";
    };
    return str.join("");
  };

  var getServerTime = function() {
    var tmpData = {
      "serverTime": 1422784461000
    };
    $.ajax({
      url: options.serverUrl,
      type: 'post',
      dataType: 'json',
      success: function(data) {
        options.serverTime = (data.serverTime) / 1000;
        getHourMinuteSecond();
      },
      error: function() {
        options.serverTime = (tmpData.serverTime) / 1000;
        getHourMinuteSecond();
      }
    })
  }

  var getEndTime = function() {
    var endTime = options.endTime;
    var endDate = new Date(Date.UTC(endTime[0], endTime[1], endTime[2], endTime[3], endTime[4], endTime[5]));
    options.endTime = endDate.getTime() / 1000;
  }

  var getLeftTime = function() {
    return options.endTime - options.serverTime;
  }

  var getHourMinuteSecond = function() {
    nMS = getLeftTime();
    timeGoing();
  }

  var timeGoing = function() {
    timeArray[0] = Math.floor(nMS / (60 * 60));
    timeArray[1] = Math.floor(nMS / 60) % 60;
    timeArray[2] = Math.floor(nMS) % 60;
    if (nMS > 0) {
      nMS--;
      countGet++;
      where.html(createElements(timeArray));
      if (countGet == 10) {
        countGet = 0;
        timer = null;
        getServerTime();
      } else {
        timer = setTimeout(function() {
          timeGoing();
        }, 1000);
      }

    }
  }


  $.extend(options, userOptions);
  getServerTime();
  getEndTime();

  //  createElements(this);
};