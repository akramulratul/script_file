   "use strict";(() => {
      $.easing.easeInOutQuad = function (x, t, b, c, d) {
        if ((t /= d / 2) < 1) return (c / 2) * t * t + b;
        return (-c / 2) * (--t * (t - 2) - 1) + b;
      };
      $(document).ready(function () {
        $("#1h").hover(
          function () {
            $("#2h").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3h").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4h").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#2h").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 500,
                easing: "easeInOutQuad",
              }
            ),
              $("#3h").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 500,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4h").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 500,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#2h").hover(
          function () {
            $("#1h").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3h").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4h").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1h").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3h").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4h").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#3h").hover(
          function () {
            $("#1h").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2h").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4h").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1h").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2h").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4h").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#4h").hover(
          function () {
            $("#1h").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2h").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3h").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1h").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2h").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3h").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });

      //footer animate function
      $(document).ready(function () {
        $("#1f").hover(
          function () {
            $("#2f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#2f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#2f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#2f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#3f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#4f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#5f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#6f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#6f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#7f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#8f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
      $(document).ready(function () {
        $("#8f").hover(
          function () {
            $("#1f").animate(
              {
                color: $.Color("#3c474f"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#3c474f"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          },
          function () {
            $("#1f").animate(
              {
                color: $.Color("#ffffff"),
              },
              {
                duration: 200,
                easing: "easeInOutQuad",
              }
            ),
              $("#2f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#3f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#4f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#5f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#6f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              ),
              $("#7f").animate(
                {
                  color: $.Color("#ffffff"),
                },
                {
                  duration: 200,
                  easing: "easeInOutQuad",
                }
              );
          }
        );
      });
   })();
