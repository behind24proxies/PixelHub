import {useState} from 'react'
export default function Y2016(props) {
 const [toexport,setToexport] = useState({})
 const [jned,setJned] = useState ('')
  const changer = (e) => {

    var current = props.color;
    if(e.target.classList.contains(current)){
        e.target.classList.remove(current);
        e.target.classList.add('zero');

        const tmp = toexport;
        tmp[e.target.dataset.date] = 'zero'
        setToexport(tmp)
    }
    else{
        e.target.classList.value=''
        e.target.classList.add(current);
        const tmp = toexport;
        tmp[e.target.dataset.date] = current
        setToexport(tmp)
    }
    var jned = JSON.stringify(toexport)
    props.callback(jned)

  };
  return (
    <div className="days">
      <p>{jned}</p>
      <svg width="823" height="128"  >
  <g transform="translate(15, 20)" data-hydro-click="{&quot;event_type&quot;:&quot;user_profile.click&quot;,&quot;payload&quot;:{&quot;profile_user_id&quot;:96356684,&quot;target&quot;:&quot;CONTRIBUTION_CALENDAR_SQUARE&quot;,&quot;user_id&quot;:null,&quot;originating_url&quot;:&quot;https://github.com/users/behind24proxies/contributions?from=2016-12-01&amp;to=2016-12-31&quot;}}" data-hydro-click-hmac="da99b0fa12262c0fbc1ee8595b62501be85f0199e6b6fd84eac8cb9379fe85d0">
      <g transform="translate(0, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="16" y="75"   rx="2" ry="2" data-count="2" data-date="2016-01-01" data-level="3"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="16" y="90"   rx="2" ry="2" data-count="2" data-date="2016-01-02" data-level="3"></rect>
      </g>
      <g transform="translate(16, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="15" y="0"   rx="2" ry="2" data-count="3" data-date="2016-01-03" data-level="4"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="15" y="15"   rx="2" ry="2" data-count="0" data-date="2016-01-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="15" y="30"   rx="2" ry="2" data-count="0" data-date="2016-01-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="15" y="45"   rx="2" ry="2" data-count="0" data-date="2016-01-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="15" y="60"   rx="2" ry="2" data-count="0" data-date="2016-01-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="15" y="75"   rx="2" ry="2" data-count="0" data-date="2016-01-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="15" y="90"   rx="2" ry="2" data-count="0" data-date="2016-01-09" data-level="0"></rect>
      </g>
      <g transform="translate(32, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="14" y="0"   rx="2" ry="2" data-count="0" data-date="2016-01-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="14" y="15"   rx="2" ry="2" data-count="0" data-date="2016-01-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="14" y="30"   rx="2" ry="2" data-count="0" data-date="2016-01-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="14" y="45"   rx="2" ry="2" data-count="0" data-date="2016-01-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="14" y="60"   rx="2" ry="2" data-count="0" data-date="2016-01-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="14" y="75"   rx="2" ry="2" data-count="0" data-date="2016-01-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="14" y="90"   rx="2" ry="2" data-count="0" data-date="2016-01-16" data-level="0"></rect>
      </g>
      <g transform="translate(48, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="13" y="0"   rx="2" ry="2" data-count="0" data-date="2016-01-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="13" y="15"   rx="2" ry="2" data-count="0" data-date="2016-01-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="13" y="30"   rx="2" ry="2" data-count="0" data-date="2016-01-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="13" y="45"   rx="2" ry="2" data-count="0" data-date="2016-01-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="13" y="60"   rx="2" ry="2" data-count="0" data-date="2016-01-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="13" y="75"   rx="2" ry="2" data-count="0" data-date="2016-01-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="13" y="90"   rx="2" ry="2" data-count="0" data-date="2016-01-23" data-level="0"></rect>
      </g>
      <g transform="translate(64, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="12" y="0"   rx="2" ry="2" data-count="0" data-date="2016-01-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="12" y="15"   rx="2" ry="2" data-count="0" data-date="2016-01-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="12" y="30"   rx="2" ry="2" data-count="0" data-date="2016-01-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="12" y="45"   rx="2" ry="2" data-count="0" data-date="2016-01-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="12" y="60"   rx="2" ry="2" data-count="0" data-date="2016-01-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="12" y="75"   rx="2" ry="2" data-count="0" data-date="2016-01-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="12" y="90"   rx="2" ry="2" data-count="0" data-date="2016-01-30" data-level="0"></rect>
      </g>
      <g transform="translate(80, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="11" y="0"   rx="2" ry="2" data-count="0" data-date="2016-01-31" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="11" y="15"   rx="2" ry="2" data-count="0" data-date="2016-02-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="11" y="30"   rx="2" ry="2" data-count="0" data-date="2016-02-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="11" y="45"   rx="2" ry="2" data-count="0" data-date="2016-02-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="11" y="60"   rx="2" ry="2" data-count="0" data-date="2016-02-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="11" y="75"   rx="2" ry="2" data-count="0" data-date="2016-02-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="11" y="90"   rx="2" ry="2" data-count="0" data-date="2016-02-06" data-level="0"></rect>
      </g>
      <g transform="translate(96, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="10" y="0"   rx="2" ry="2" data-count="0" data-date="2016-02-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="10" y="15"   rx="2" ry="2" data-count="0" data-date="2016-02-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="10" y="30"   rx="2" ry="2" data-count="0" data-date="2016-02-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="10" y="45"   rx="2" ry="2" data-count="0" data-date="2016-02-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="10" y="60"   rx="2" ry="2" data-count="0" data-date="2016-02-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="10" y="75"   rx="2" ry="2" data-count="0" data-date="2016-02-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="10" y="90"   rx="2" ry="2" data-count="0" data-date="2016-02-13" data-level="0"></rect>
      </g>
      <g transform="translate(112, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="9" y="0"   rx="2" ry="2" data-count="0" data-date="2016-02-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="9" y="15"   rx="2" ry="2" data-count="0" data-date="2016-02-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="9" y="30"   rx="2" ry="2" data-count="0" data-date="2016-02-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="9" y="45"   rx="2" ry="2" data-count="0" data-date="2016-02-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="9" y="60"   rx="2" ry="2" data-count="0" data-date="2016-02-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="9" y="75"   rx="2" ry="2" data-count="0" data-date="2016-02-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="9" y="90"   rx="2" ry="2" data-count="0" data-date="2016-02-20" data-level="0"></rect>
      </g>
      <g transform="translate(128, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="8" y="0"   rx="2" ry="2" data-count="0" data-date="2016-02-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="8" y="15"   rx="2" ry="2" data-count="0" data-date="2016-02-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="8" y="30"   rx="2" ry="2" data-count="0" data-date="2016-02-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="8" y="45"   rx="2" ry="2" data-count="0" data-date="2016-02-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="8" y="60"   rx="2" ry="2" data-count="0" data-date="2016-02-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="8" y="75"   rx="2" ry="2" data-count="0" data-date="2016-02-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="8" y="90"   rx="2" ry="2" data-count="0" data-date="2016-02-27" data-level="0"></rect>
      </g>
      <g transform="translate(144, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="7" y="0"   rx="2" ry="2" data-count="0" data-date="2016-02-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="7" y="15"   rx="2" ry="2" data-count="0" data-date="2016-02-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="7" y="30"   rx="2" ry="2" data-count="0" data-date="2016-03-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="7" y="45"   rx="2" ry="2" data-count="0" data-date="2016-03-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="7" y="60"   rx="2" ry="2" data-count="0" data-date="2016-03-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="7" y="75"   rx="2" ry="2" data-count="0" data-date="2016-03-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="7" y="90"   rx="2" ry="2" data-count="0" data-date="2016-03-05" data-level="0"></rect>
      </g>
      <g transform="translate(160, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="6" y="0"   rx="2" ry="2" data-count="0" data-date="2016-03-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="6" y="15"   rx="2" ry="2" data-count="0" data-date="2016-03-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="6" y="30"   rx="2" ry="2" data-count="0" data-date="2016-03-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="6" y="45"   rx="2" ry="2" data-count="0" data-date="2016-03-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="6" y="60"   rx="2" ry="2" data-count="0" data-date="2016-03-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="6" y="75"   rx="2" ry="2" data-count="0" data-date="2016-03-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="6" y="90"   rx="2" ry="2" data-count="0" data-date="2016-03-12" data-level="0"></rect>
      </g>
      <g transform="translate(176, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="5" y="0"   rx="2" ry="2" data-count="0" data-date="2016-03-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="5" y="15"   rx="2" ry="2" data-count="0" data-date="2016-03-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="5" y="30"   rx="2" ry="2" data-count="0" data-date="2016-03-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="5" y="45"   rx="2" ry="2" data-count="0" data-date="2016-03-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="5" y="60"   rx="2" ry="2" data-count="0" data-date="2016-03-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="5" y="75"   rx="2" ry="2" data-count="0" data-date="2016-03-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="5" y="90"   rx="2" ry="2" data-count="0" data-date="2016-03-19" data-level="0"></rect>
      </g>
      <g transform="translate(192, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="4" y="0"   rx="2" ry="2" data-count="0" data-date="2016-03-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="4" y="15"   rx="2" ry="2" data-count="0" data-date="2016-03-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="4" y="30"   rx="2" ry="2" data-count="0" data-date="2016-03-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="4" y="45"   rx="2" ry="2" data-count="0" data-date="2016-03-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="4" y="60"   rx="2" ry="2" data-count="0" data-date="2016-03-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="4" y="75"   rx="2" ry="2" data-count="0" data-date="2016-03-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="4" y="90"   rx="2" ry="2" data-count="0" data-date="2016-03-26" data-level="0"></rect>
      </g>
      <g transform="translate(208, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="3" y="0"   rx="2" ry="2" data-count="0" data-date="2016-03-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="3" y="15"   rx="2" ry="2" data-count="0" data-date="2016-03-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="3" y="30"   rx="2" ry="2" data-count="0" data-date="2016-03-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="3" y="45"   rx="2" ry="2" data-count="0" data-date="2016-03-30" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="3" y="60"   rx="2" ry="2" data-count="0" data-date="2016-03-31" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="3" y="75"   rx="2" ry="2" data-count="0" data-date="2016-04-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="3" y="90"   rx="2" ry="2" data-count="0" data-date="2016-04-02" data-level="0"></rect>
      </g>
      <g transform="translate(224, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="2" y="0"   rx="2" ry="2" data-count="0" data-date="2016-04-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="2" y="15"   rx="2" ry="2" data-count="0" data-date="2016-04-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="2" y="30"   rx="2" ry="2" data-count="0" data-date="2016-04-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="2" y="45"   rx="2" ry="2" data-count="0" data-date="2016-04-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="2" y="60"   rx="2" ry="2" data-count="0" data-date="2016-04-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="2" y="75"   rx="2" ry="2" data-count="0" data-date="2016-04-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="2" y="90"   rx="2" ry="2" data-count="0" data-date="2016-04-09" data-level="0"></rect>
      </g>
      <g transform="translate(240, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="1" y="0"   rx="2" ry="2" data-count="0" data-date="2016-04-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="1" y="15"   rx="2" ry="2" data-count="0" data-date="2016-04-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="1" y="30"   rx="2" ry="2" data-count="0" data-date="2016-04-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="1" y="45"   rx="2" ry="2" data-count="0" data-date="2016-04-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="1" y="60"   rx="2" ry="2" data-count="0" data-date="2016-04-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="1" y="75"   rx="2" ry="2" data-count="0" data-date="2016-04-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="1" y="90"   rx="2" ry="2" data-count="0" data-date="2016-04-16" data-level="0"></rect>
      </g>
      <g transform="translate(256, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="0" y="0"   rx="2" ry="2" data-count="0" data-date="2016-04-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="0" y="15"   rx="2" ry="2" data-count="0" data-date="2016-04-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="0" y="30"   rx="2" ry="2" data-count="0" data-date="2016-04-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="0" y="45"   rx="2" ry="2" data-count="0" data-date="2016-04-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="0" y="60"   rx="2" ry="2" data-count="0" data-date="2016-04-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="0" y="75"   rx="2" ry="2" data-count="0" data-date="2016-04-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="0" y="90"   rx="2" ry="2" data-count="0" data-date="2016-04-23" data-level="0"></rect>
      </g>
      <g transform="translate(272, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-1" y="0"   rx="2" ry="2" data-count="0" data-date="2016-04-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-1" y="15"   rx="2" ry="2" data-count="0" data-date="2016-04-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-1" y="30"   rx="2" ry="2" data-count="0" data-date="2016-04-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-1" y="45"   rx="2" ry="2" data-count="0" data-date="2016-04-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-1" y="60"   rx="2" ry="2" data-count="0" data-date="2016-04-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-1" y="75"   rx="2" ry="2" data-count="0" data-date="2016-04-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-1" y="90"   rx="2" ry="2" data-count="0" data-date="2016-04-30" data-level="0"></rect>
      </g>
      <g transform="translate(288, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-2" y="0"   rx="2" ry="2" data-count="0" data-date="2016-05-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-2" y="15"   rx="2" ry="2" data-count="0" data-date="2016-05-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-2" y="30"   rx="2" ry="2" data-count="0" data-date="2016-05-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-2" y="45"   rx="2" ry="2" data-count="0" data-date="2016-05-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-2" y="60"   rx="2" ry="2" data-count="0" data-date="2016-05-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-2" y="75"   rx="2" ry="2" data-count="0" data-date="2016-05-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-2" y="90"   rx="2" ry="2" data-count="0" data-date="2016-05-07" data-level="0"></rect>
      </g>
      <g transform="translate(304, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-3" y="0"   rx="2" ry="2" data-count="0" data-date="2016-05-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-3" y="15"   rx="2" ry="2" data-count="0" data-date="2016-05-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-3" y="30"   rx="2" ry="2" data-count="0" data-date="2016-05-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-3" y="45"   rx="2" ry="2" data-count="0" data-date="2016-05-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-3" y="60"   rx="2" ry="2" data-count="0" data-date="2016-05-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-3" y="75"   rx="2" ry="2" data-count="0" data-date="2016-05-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-3" y="90"   rx="2" ry="2" data-count="0" data-date="2016-05-14" data-level="0"></rect>
      </g>
      <g transform="translate(320, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-4" y="0"   rx="2" ry="2" data-count="0" data-date="2016-05-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-4" y="15"   rx="2" ry="2" data-count="0" data-date="2016-05-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-4" y="30"   rx="2" ry="2" data-count="0" data-date="2016-05-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-4" y="45"   rx="2" ry="2" data-count="0" data-date="2016-05-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-4" y="60"   rx="2" ry="2" data-count="0" data-date="2016-05-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-4" y="75"   rx="2" ry="2" data-count="0" data-date="2016-05-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-4" y="90"   rx="2" ry="2" data-count="0" data-date="2016-05-21" data-level="0"></rect>
      </g>
      <g transform="translate(336, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-5" y="0"   rx="2" ry="2" data-count="0" data-date="2016-05-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-5" y="15"   rx="2" ry="2" data-count="0" data-date="2016-05-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-5" y="30"   rx="2" ry="2" data-count="0" data-date="2016-05-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-5" y="45"   rx="2" ry="2" data-count="0" data-date="2016-05-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-5" y="60"   rx="2" ry="2" data-count="0" data-date="2016-05-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-5" y="75"   rx="2" ry="2" data-count="0" data-date="2016-05-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-5" y="90"   rx="2" ry="2" data-count="0" data-date="2016-05-28" data-level="0"></rect>
      </g>
      <g transform="translate(352, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-6" y="0"   rx="2" ry="2" data-count="0" data-date="2016-05-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-6" y="15"   rx="2" ry="2" data-count="0" data-date="2016-05-30" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-6" y="30"   rx="2" ry="2" data-count="0" data-date="2016-05-31" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-6" y="45"   rx="2" ry="2" data-count="0" data-date="2016-06-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-6" y="60"   rx="2" ry="2" data-count="0" data-date="2016-06-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-6" y="75"   rx="2" ry="2" data-count="0" data-date="2016-06-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-6" y="90"   rx="2" ry="2" data-count="0" data-date="2016-06-04" data-level="0"></rect>
      </g>
      <g transform="translate(368, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-7" y="0"   rx="2" ry="2" data-count="0" data-date="2016-06-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-7" y="15"   rx="2" ry="2" data-count="0" data-date="2016-06-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-7" y="30"   rx="2" ry="2" data-count="0" data-date="2016-06-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-7" y="45"   rx="2" ry="2" data-count="0" data-date="2016-06-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-7" y="60"   rx="2" ry="2" data-count="0" data-date="2016-06-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-7" y="75"   rx="2" ry="2" data-count="0" data-date="2016-06-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-7" y="90"   rx="2" ry="2" data-count="0" data-date="2016-06-11" data-level="0"></rect>
      </g>
      <g transform="translate(384, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-8" y="0"   rx="2" ry="2" data-count="0" data-date="2016-06-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-8" y="15"   rx="2" ry="2" data-count="0" data-date="2016-06-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-8" y="30"   rx="2" ry="2" data-count="0" data-date="2016-06-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-8" y="45"   rx="2" ry="2" data-count="0" data-date="2016-06-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-8" y="60"   rx="2" ry="2" data-count="0" data-date="2016-06-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-8" y="75"   rx="2" ry="2" data-count="0" data-date="2016-06-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-8" y="90"   rx="2" ry="2" data-count="0" data-date="2016-06-18" data-level="0"></rect>
      </g>
      <g transform="translate(400, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-9" y="0"   rx="2" ry="2" data-count="0" data-date="2016-06-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-9" y="15"   rx="2" ry="2" data-count="0" data-date="2016-06-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-9" y="30"   rx="2" ry="2" data-count="0" data-date="2016-06-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-9" y="45"   rx="2" ry="2" data-count="0" data-date="2016-06-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-9" y="60"   rx="2" ry="2" data-count="0" data-date="2016-06-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-9" y="75"   rx="2" ry="2" data-count="0" data-date="2016-06-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-9" y="90"   rx="2" ry="2" data-count="0" data-date="2016-06-25" data-level="0"></rect>
      </g>
      <g transform="translate(416, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-10" y="0"   rx="2" ry="2" data-count="0" data-date="2016-06-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-10" y="15"   rx="2" ry="2" data-count="0" data-date="2016-06-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-10" y="30"   rx="2" ry="2" data-count="0" data-date="2016-06-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-10" y="45"   rx="2" ry="2" data-count="0" data-date="2016-06-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-10" y="60"   rx="2" ry="2" data-count="0" data-date="2016-06-30" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-10" y="75"   rx="2" ry="2" data-count="0" data-date="2016-07-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-10" y="90"   rx="2" ry="2" data-count="0" data-date="2016-07-02" data-level="0"></rect>
      </g>
      <g transform="translate(432, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-11" y="0"   rx="2" ry="2" data-count="0" data-date="2016-07-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-11" y="15"   rx="2" ry="2" data-count="0" data-date="2016-07-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-11" y="30"   rx="2" ry="2" data-count="0" data-date="2016-07-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-11" y="45"   rx="2" ry="2" data-count="0" data-date="2016-07-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-11" y="60"   rx="2" ry="2" data-count="0" data-date="2016-07-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-11" y="75"   rx="2" ry="2" data-count="0" data-date="2016-07-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-11" y="90"   rx="2" ry="2" data-count="0" data-date="2016-07-09" data-level="0"></rect>
      </g>
      <g transform="translate(448, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-12" y="0"   rx="2" ry="2" data-count="0" data-date="2016-07-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-12" y="15"   rx="2" ry="2" data-count="0" data-date="2016-07-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-12" y="30"   rx="2" ry="2" data-count="0" data-date="2016-07-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-12" y="45"   rx="2" ry="2" data-count="0" data-date="2016-07-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-12" y="60"   rx="2" ry="2" data-count="0" data-date="2016-07-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-12" y="75"   rx="2" ry="2" data-count="0" data-date="2016-07-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-12" y="90"   rx="2" ry="2" data-count="0" data-date="2016-07-16" data-level="0"></rect>
      </g>
      <g transform="translate(464, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-13" y="0"   rx="2" ry="2" data-count="0" data-date="2016-07-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-13" y="15"   rx="2" ry="2" data-count="0" data-date="2016-07-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-13" y="30"   rx="2" ry="2" data-count="0" data-date="2016-07-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-13" y="45"   rx="2" ry="2" data-count="0" data-date="2016-07-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-13" y="60"   rx="2" ry="2" data-count="0" data-date="2016-07-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-13" y="75"   rx="2" ry="2" data-count="0" data-date="2016-07-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-13" y="90"   rx="2" ry="2" data-count="0" data-date="2016-07-23" data-level="0"></rect>
      </g>
      <g transform="translate(480, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-14" y="0"   rx="2" ry="2" data-count="0" data-date="2016-07-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-14" y="15"   rx="2" ry="2" data-count="0" data-date="2016-07-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-14" y="30"   rx="2" ry="2" data-count="0" data-date="2016-07-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-14" y="45"   rx="2" ry="2" data-count="0" data-date="2016-07-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-14" y="60"   rx="2" ry="2" data-count="0" data-date="2016-07-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-14" y="75"   rx="2" ry="2" data-count="0" data-date="2016-07-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-14" y="90"   rx="2" ry="2" data-count="0" data-date="2016-07-30" data-level="0"></rect>
      </g>
      <g transform="translate(496, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-15" y="0"   rx="2" ry="2" data-count="0" data-date="2016-07-31" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-15" y="15"   rx="2" ry="2" data-count="0" data-date="2016-08-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-15" y="30"   rx="2" ry="2" data-count="0" data-date="2016-08-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-15" y="45"   rx="2" ry="2" data-count="0" data-date="2016-08-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-15" y="60"   rx="2" ry="2" data-count="0" data-date="2016-08-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-15" y="75"   rx="2" ry="2" data-count="0" data-date="2016-08-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-15" y="90"   rx="2" ry="2" data-count="0" data-date="2016-08-06" data-level="0"></rect>
      </g>
      <g transform="translate(512, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-16" y="0"   rx="2" ry="2" data-count="0" data-date="2016-08-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-16" y="15"   rx="2" ry="2" data-count="0" data-date="2016-08-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-16" y="30"   rx="2" ry="2" data-count="0" data-date="2016-08-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-16" y="45"   rx="2" ry="2" data-count="0" data-date="2016-08-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-16" y="60"   rx="2" ry="2" data-count="0" data-date="2016-08-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-16" y="75"   rx="2" ry="2" data-count="0" data-date="2016-08-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-16" y="90"   rx="2" ry="2" data-count="0" data-date="2016-08-13" data-level="0"></rect>
      </g>
      <g transform="translate(528, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-17" y="0"   rx="2" ry="2" data-count="0" data-date="2016-08-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-17" y="15"   rx="2" ry="2" data-count="0" data-date="2016-08-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-17" y="30"   rx="2" ry="2" data-count="0" data-date="2016-08-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-17" y="45"   rx="2" ry="2" data-count="0" data-date="2016-08-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-17" y="60"   rx="2" ry="2" data-count="0" data-date="2016-08-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-17" y="75"   rx="2" ry="2" data-count="0" data-date="2016-08-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-17" y="90"   rx="2" ry="2" data-count="0" data-date="2016-08-20" data-level="0"></rect>
      </g>
      <g transform="translate(544, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-18" y="0"   rx="2" ry="2" data-count="0" data-date="2016-08-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-18" y="15"   rx="2" ry="2" data-count="0" data-date="2016-08-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-18" y="30"   rx="2" ry="2" data-count="0" data-date="2016-08-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-18" y="45"   rx="2" ry="2" data-count="0" data-date="2016-08-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-18" y="60"   rx="2" ry="2" data-count="0" data-date="2016-08-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-18" y="75"   rx="2" ry="2" data-count="0" data-date="2016-08-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-18" y="90"   rx="2" ry="2" data-count="0" data-date="2016-08-27" data-level="0"></rect>
      </g>
      <g transform="translate(560, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-19" y="0"   rx="2" ry="2" data-count="0" data-date="2016-08-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-19" y="15"   rx="2" ry="2" data-count="0" data-date="2016-08-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-19" y="30"   rx="2" ry="2" data-count="0" data-date="2016-08-30" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-19" y="45"   rx="2" ry="2" data-count="0" data-date="2016-08-31" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-19" y="60"   rx="2" ry="2" data-count="0" data-date="2016-09-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-19" y="75"   rx="2" ry="2" data-count="0" data-date="2016-09-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-19" y="90"   rx="2" ry="2" data-count="0" data-date="2016-09-03" data-level="0"></rect>
      </g>
      <g transform="translate(576, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-20" y="0"   rx="2" ry="2" data-count="0" data-date="2016-09-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-20" y="15"   rx="2" ry="2" data-count="0" data-date="2016-09-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-20" y="30"   rx="2" ry="2" data-count="0" data-date="2016-09-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-20" y="45"   rx="2" ry="2" data-count="0" data-date="2016-09-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-20" y="60"   rx="2" ry="2" data-count="0" data-date="2016-09-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-20" y="75"   rx="2" ry="2" data-count="0" data-date="2016-09-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-20" y="90"   rx="2" ry="2" data-count="0" data-date="2016-09-10" data-level="0"></rect>
      </g>
      <g transform="translate(592, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-21" y="0"   rx="2" ry="2" data-count="0" data-date="2016-09-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-21" y="15"   rx="2" ry="2" data-count="0" data-date="2016-09-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-21" y="30"   rx="2" ry="2" data-count="0" data-date="2016-09-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-21" y="45"   rx="2" ry="2" data-count="0" data-date="2016-09-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-21" y="60"   rx="2" ry="2" data-count="0" data-date="2016-09-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-21" y="75"   rx="2" ry="2" data-count="0" data-date="2016-09-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-21" y="90"   rx="2" ry="2" data-count="0" data-date="2016-09-17" data-level="0"></rect>
      </g>
      <g transform="translate(608, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-22" y="0"   rx="2" ry="2" data-count="0" data-date="2016-09-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-22" y="15"   rx="2" ry="2" data-count="0" data-date="2016-09-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-22" y="30"   rx="2" ry="2" data-count="0" data-date="2016-09-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-22" y="45"   rx="2" ry="2" data-count="0" data-date="2016-09-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-22" y="60"   rx="2" ry="2" data-count="0" data-date="2016-09-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-22" y="75"   rx="2" ry="2" data-count="0" data-date="2016-09-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-22" y="90"   rx="2" ry="2" data-count="0" data-date="2016-09-24" data-level="0"></rect>
      </g>
      <g transform="translate(624, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-23" y="0"   rx="2" ry="2" data-count="0" data-date="2016-09-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-23" y="15"   rx="2" ry="2" data-count="0" data-date="2016-09-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-23" y="30"   rx="2" ry="2" data-count="0" data-date="2016-09-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-23" y="45"   rx="2" ry="2" data-count="0" data-date="2016-09-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-23" y="60"   rx="2" ry="2" data-count="0" data-date="2016-09-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-23" y="75"   rx="2" ry="2" data-count="0" data-date="2016-09-30" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-23" y="90"   rx="2" ry="2" data-count="0" data-date="2016-10-01" data-level="0"></rect>
      </g>
      <g transform="translate(640, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-24" y="0"   rx="2" ry="2" data-count="0" data-date="2016-10-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-24" y="15"   rx="2" ry="2" data-count="0" data-date="2016-10-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-24" y="30"   rx="2" ry="2" data-count="0" data-date="2016-10-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-24" y="45"   rx="2" ry="2" data-count="0" data-date="2016-10-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-24" y="60"   rx="2" ry="2" data-count="0" data-date="2016-10-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-24" y="75"   rx="2" ry="2" data-count="0" data-date="2016-10-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-24" y="90"   rx="2" ry="2" data-count="0" data-date="2016-10-08" data-level="0"></rect>
      </g>
      <g transform="translate(656, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-25" y="0"   rx="2" ry="2" data-count="0" data-date="2016-10-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-25" y="15"   rx="2" ry="2" data-count="0" data-date="2016-10-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-25" y="30"   rx="2" ry="2" data-count="0" data-date="2016-10-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-25" y="45"   rx="2" ry="2" data-count="0" data-date="2016-10-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-25" y="60"   rx="2" ry="2" data-count="0" data-date="2016-10-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-25" y="75"   rx="2" ry="2" data-count="0" data-date="2016-10-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-25" y="90"   rx="2" ry="2" data-count="0" data-date="2016-10-15" data-level="0"></rect>
      </g>
      <g transform="translate(672, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-26" y="0"   rx="2" ry="2" data-count="0" data-date="2016-10-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-26" y="15"   rx="2" ry="2" data-count="0" data-date="2016-10-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-26" y="30"   rx="2" ry="2" data-count="0" data-date="2016-10-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-26" y="45"   rx="2" ry="2" data-count="0" data-date="2016-10-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-26" y="60"   rx="2" ry="2" data-count="0" data-date="2016-10-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-26" y="75"   rx="2" ry="2" data-count="0" data-date="2016-10-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-26" y="90"   rx="2" ry="2" data-count="0" data-date="2016-10-22" data-level="0"></rect>
      </g>
      <g transform="translate(688, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-27" y="0"   rx="2" ry="2" data-count="0" data-date="2016-10-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-27" y="15"   rx="2" ry="2" data-count="0" data-date="2016-10-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-27" y="30"   rx="2" ry="2" data-count="0" data-date="2016-10-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-27" y="45"   rx="2" ry="2" data-count="0" data-date="2016-10-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-27" y="60"   rx="2" ry="2" data-count="0" data-date="2016-10-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-27" y="75"   rx="2" ry="2" data-count="0" data-date="2016-10-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-27" y="90"   rx="2" ry="2" data-count="0" data-date="2016-10-29" data-level="0"></rect>
      </g>
      <g transform="translate(704, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-28" y="0"   rx="2" ry="2" data-count="0" data-date="2016-10-30" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-28" y="15"   rx="2" ry="2" data-count="0" data-date="2016-10-31" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-28" y="30"   rx="2" ry="2" data-count="0" data-date="2016-11-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-28" y="45"   rx="2" ry="2" data-count="0" data-date="2016-11-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-28" y="60"   rx="2" ry="2" data-count="0" data-date="2016-11-03" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-28" y="75"   rx="2" ry="2" data-count="0" data-date="2016-11-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-28" y="90"   rx="2" ry="2" data-count="0" data-date="2016-11-05" data-level="0"></rect>
      </g>
      <g transform="translate(720, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-29" y="0"   rx="2" ry="2" data-count="0" data-date="2016-11-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-29" y="15"   rx="2" ry="2" data-count="0" data-date="2016-11-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-29" y="30"   rx="2" ry="2" data-count="0" data-date="2016-11-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-29" y="45"   rx="2" ry="2" data-count="0" data-date="2016-11-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-29" y="60"   rx="2" ry="2" data-count="0" data-date="2016-11-10" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-29" y="75"   rx="2" ry="2" data-count="0" data-date="2016-11-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-29" y="90"   rx="2" ry="2" data-count="0" data-date="2016-11-12" data-level="0"></rect>
      </g>
      <g transform="translate(736, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-30" y="0"   rx="2" ry="2" data-count="0" data-date="2016-11-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-30" y="15"   rx="2" ry="2" data-count="0" data-date="2016-11-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-30" y="30"   rx="2" ry="2" data-count="0" data-date="2016-11-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-30" y="45"   rx="2" ry="2" data-count="0" data-date="2016-11-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-30" y="60"   rx="2" ry="2" data-count="0" data-date="2016-11-17" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-30" y="75"   rx="2" ry="2" data-count="0" data-date="2016-11-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-30" y="90"   rx="2" ry="2" data-count="0" data-date="2016-11-19" data-level="0"></rect>
      </g>
      <g transform="translate(752, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-31" y="0"   rx="2" ry="2" data-count="0" data-date="2016-11-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-31" y="15"   rx="2" ry="2" data-count="0" data-date="2016-11-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-31" y="30"   rx="2" ry="2" data-count="0" data-date="2016-11-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-31" y="45"   rx="2" ry="2" data-count="0" data-date="2016-11-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-31" y="60"   rx="2" ry="2" data-count="0" data-date="2016-11-24" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-31" y="75"   rx="2" ry="2" data-count="0" data-date="2016-11-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-31" y="90"   rx="2" ry="2" data-count="0" data-date="2016-11-26" data-level="0"></rect>
      </g>
      <g transform="translate(768, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-32" y="0"   rx="2" ry="2" data-count="0" data-date="2016-11-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-32" y="15"   rx="2" ry="2" data-count="0" data-date="2016-11-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-32" y="30"   rx="2" ry="2" data-count="0" data-date="2016-11-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-32" y="45"   rx="2" ry="2" data-count="0" data-date="2016-11-30" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-32" y="60"   rx="2" ry="2" data-count="0" data-date="2016-12-01" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-32" y="75"   rx="2" ry="2" data-count="0" data-date="2016-12-02" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-32" y="90"   rx="2" ry="2" data-count="0" data-date="2016-12-03" data-level="0"></rect>
      </g>
      <g transform="translate(784, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-33" y="0"   rx="2" ry="2" data-count="0" data-date="2016-12-04" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-33" y="15"   rx="2" ry="2" data-count="0" data-date="2016-12-05" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-33" y="30"   rx="2" ry="2" data-count="0" data-date="2016-12-06" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-33" y="45"   rx="2" ry="2" data-count="0" data-date="2016-12-07" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-33" y="60"   rx="2" ry="2" data-count="0" data-date="2016-12-08" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-33" y="75"   rx="2" ry="2" data-count="0" data-date="2016-12-09" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-33" y="90"   rx="2" ry="2" data-count="0" data-date="2016-12-10" data-level="0"></rect>
      </g>
      <g transform="translate(800, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-34" y="0"   rx="2" ry="2" data-count="0" data-date="2016-12-11" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-34" y="15"   rx="2" ry="2" data-count="0" data-date="2016-12-12" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-34" y="30"   rx="2" ry="2" data-count="0" data-date="2016-12-13" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-34" y="45"   rx="2" ry="2" data-count="0" data-date="2016-12-14" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-34" y="60"   rx="2" ry="2" data-count="0" data-date="2016-12-15" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-34" y="75"   rx="2" ry="2" data-count="0" data-date="2016-12-16" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-34" y="90"   rx="2" ry="2" data-count="0" data-date="2016-12-17" data-level="0"></rect>
      </g>
      <g transform="translate(816, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-35" y="0"   rx="2" ry="2" data-count="0" data-date="2016-12-18" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-35" y="15"   rx="2" ry="2" data-count="0" data-date="2016-12-19" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-35" y="30"   rx="2" ry="2" data-count="0" data-date="2016-12-20" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-35" y="45"   rx="2" ry="2" data-count="0" data-date="2016-12-21" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-35" y="60"   rx="2" ry="2" data-count="0" data-date="2016-12-22" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-35" y="75"   rx="2" ry="2" data-count="0" data-date="2016-12-23" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-35" y="90"   rx="2" ry="2" data-count="0" data-date="2016-12-24" data-level="0"></rect>
      </g>
      <g transform="translate(832, 0)">
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-36" y="0"   rx="2" ry="2" data-count="0" data-date="2016-12-25" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-36" y="15"   rx="2" ry="2" data-count="0" data-date="2016-12-26" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-36" y="30"   rx="2" ry="2" data-count="0" data-date="2016-12-27" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-36" y="45"   rx="2" ry="2" data-count="0" data-date="2016-12-28" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-36" y="60"   rx="2" ry="2" data-count="0" data-date="2016-12-29" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-36" y="75"   rx="2" ry="2" data-count="0" data-date="2016-12-30" data-level="0"></rect>
          <rect onClick={(e) => changer(e)}                              className="zero" width="11" height="11" x="-36" y="90"   rx="2" ry="2" data-count="0" data-date="2016-12-31" data-level="0"></rect>
      </g>

</g></svg>
    </div>
  );
}
