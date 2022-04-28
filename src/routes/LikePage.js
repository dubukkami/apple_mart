import React, {useEffect, useState} from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { Inner } from "../components/layout/Inner";
import SaleHeader from "../components/layout/sale/SaleHeader";
import SaleBtnList from "../components/layout/sale/SaleBtnList";
import SaleStuff from "../components/layout/sale/SaleStuff";
import itemOfJson from "../data/carrot.json";
import { MobileContainer } from "../components/common/MobileContainer";
import { MobileInner } from "../components/common/MobileInner";
import LikeHeader from "../components/layout/like/LikeHeader";
import likeIconOn from "../images/ico/ico_like.png";
import likeIconOff from "../images/ico/ico_like_count.png";
import { useSelector } from "react-redux";
import axios from "axios";

const SaleWrap = styled.div`
  display: block;
`;

const DepthInner = styled.div`
  min-height: calc(100vh);
  background: rgb(250, 250, 250);
`;

const SaleInner = styled(Inner)`
  background: rgb(250, 250, 250);
`;

const LikePage = () => {
  const { userObj } = useSelector(({ user }) => ({
    userObj: user.currentUser,
  }));
  const [tab, setTab] = useState(1);
  const user = userObj;
  const [item, setItem] = useState([]);
  const onClick = (id) => setTab(id);

  const history = useNavigate();
  useEffect(()=>{
    axios
        .get("/like")
        .then((result) => {
          setItem(result.data.data)
        })
        .catch((reason) => {
          console.log(reason)
        });
  },[])
  return (
      <MobileContainer>
        <MobileInner>
          <SaleWrap>
            <LikeHeader history={history} />
            <DepthInner>
              {tab === 1 &&
                  item.map((item, i) => {
                    const { region_name, img, title, content, price } = item;
                    if (i > 10) {
                      return;
                    }

                    return (
                        <div key={i}>
                          <SaleInner>
                            <SaleStuff
                                no={1}
                                thumb={img}
                                matter={{
                                  title: title,
                                  content: content,
                                  price: price,
                                }}
                                time={new Date().getTime()}
                                creatorId={userObj.uid}
                                region={region_name}
                                like={true}
                                page="like"
                            />
                          </SaleInner>
                        </div>
                    );
                  })}
            </DepthInner>
          </SaleWrap>
        </MobileInner>
      </MobileContainer>
  );
};

export default LikePage;
