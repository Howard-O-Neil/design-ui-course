import React, { ChangeEvent, FormHTMLAttributes, useContext, useEffect } from "react";
import styles from "./landing.module.scss";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import landingImg from "../resource/img/landing_img.png"
import vector_1 from "../resource/img/vector_1.png"
import vector_2 from "../resource/img/vector_2.png"
import vector_3 from "../resource/img/vector_3.png"
import vector_4 from "../resource/img/vector_4.png"
import vector_5 from "../resource/img/vector_5.png"
import vector_6 from "../resource/img/vector_6.png"
import vector_7 from "../resource/img/vector_7.png"
import vector_8 from "../resource/img/vector_8.png"
import rec1 from "../resource/img/rec1.png"
import rec2 from "../resource/img/rec2.png"
import rec3 from "../resource/img/rec3.png"
import rec4 from "../resource/img/rec4.png"

import celina from "../resource/img/celina.png"
import benny from "../resource/img/benny.png"
import karen from "../resource/img/karen.png"
import zoey from "../resource/img/zoey.png"

import logoWhite from "../resource/img/Logo_White.png"
import logoBlack from "../resource/img/Logo_Black.png"
import man_grind from "../resource/img/man_grind.png"

import left_arrow_1 from "../resource/img/left_arrow_1.png"
import right_arrow_1 from "../resource/img/right_arrow_1.png"
import Footer from "@/footer/footer";

import udemy from "../resource/img/udemy.png"
import khan from "../resource/img/khan.png"
import alison from "../resource/img/alison.png"
import mitocw from "../resource/img/mitocw.png"
import skillshare from "../resource/img/skillshare.png"
import right_arrow from "../resource/img/right_arrow.png"

import student_icon from "../resource/img/student.png"
import heart_icon from "../resource/img/heart.png"

import { AppContext } from "@/AppContext";
import { Box, Modal, Typography } from "@mui/material";
import SignIn from "@/signin/signin";
import SignUp from "@/signup/signup";
import ModalView from "@/modalView/modalView";

const account_modal = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'fit-content',
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 1,
  };

const Landing = () => {

    const [appState, dispatch] = useContext(AppContext)

    useEffect(() => {
        dispatch({
            type: "update_top_4_cate",
            value: undefined
        })
    }, [])

    useEffect(() => {
        dispatch({
            type: "update_top_20_courses",
            value: undefined
        })
    }, [])

    return (
        <div className={styles.mainPanel}>
            <ModalView />
            <div className={styles.outerDiv}>

                {/* group gradient 1 */}
                <div>
                    <img className={styles.landingImg} src={landingImg} />

                    <img className={styles.gradient_1} src={vector_1}></img>
                    <img className={styles.gradient_2} src={vector_2}></img>

                    <img className={styles.gradient_3} src={vector_3}></img>
                    <img className={styles.gradient_4} src={vector_4}></img>
                </div>

                {/* group gradient 2 */}
                <div>
                    <img className={styles.gradient_5} src={vector_5}></img>
                    <img className={styles.gradient_6} src={vector_6}></img>
                    <img className={styles.gradient_7} src={vector_7}></img>
                    <img className={styles.gradient_8} src={vector_8}></img>
                </div>

                <div className={styles.innerDiv}>
                    <div className={styles.topHeader}>
                        <img className={styles.logoWhite} src={logoBlack}></img>

                        <div className={styles.flexDivBtn}>
                            <button>Home</button>
                            <button>About us</button>
                            <button>Categories</button>
                            <button onClick={() => dispatch({type: "handle_open_signin", value: undefined})}>Sign in</button>
                            <button onClick={() => dispatch({type: "handle_open_signup", value: undefined})}>Sign up</button>
                        </div>
                    </div>

                    {/* DATA STATE */}
                    <div className={styles.flexDivCategory}>
                        {appState.top_4_categories.map((x, _) => (
                            <div className={styles.categoryCard}>
                                <img className={styles.icon} src={x.icon} />
                                <div className={styles.header}>
                                    <p>{x.name}</p>
                                </div>
                                <div className={styles.txt}>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu sapien ac lectus fermentum egestas non nec quam</p>
                                </div>

                                <img className={styles.rightArrow} src={right_arrow}></img>
                            </div>
                        ))}

                    </div>

                    <button className={styles.enrollBtn}>
                        Enroll now
                    </button>

                    <div className={styles.grindSeason}>
                        <div className={styles.speech}>
                            <div className={styles.header}>
                                <p>
                                    It's grind season
                                </p>
                            </div>
                            <div className={styles.txt}>
                                <p>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent eu sapien ac lectus fermentum egestas non nec quam. Etiam ut tristique odio. Nullam in rutrum metus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
                                </p>
                            </div>
                        </div>

                        <img src={man_grind} />

                    </div>

                    <div className={styles.loveCollegon}>
                        <div className={styles.header}>
                            <p>You'll love collegon</p>
                        </div>

                        <div className={styles.feedBack1}>
                            <img className={styles.rec1} src={rec1} />
                            <img className={styles.rec2} src={rec2} />

                            <img className={styles.celina} src={celina} />

                            <div className={styles.txt}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit orci, rutrum ut eleifend ac, dapibus nec ante. Etiam mattis est et libero mattis, eget elementum ipsum lacinia.</p>
                            </div>

                            <div className={styles.name}>
                                <p>Celina Dbag</p>
                            </div>
                        </div>

                        <div className={styles.feedBack2}>
                            <img className={styles.rec3} src={rec3}></img>

                            <img className={styles.benny} src={benny} />
                            <div className={styles.txt}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit orci, rutrum ut eleifend ac, dapibus nec ante. Etiam mattis est et libero mattis, eget elementum ipsum lacinia.</p>
                            </div>

                            <div className={styles.name}>
                                <p>Benny Broke</p>
                            </div>
                        </div>

                        <div className={styles.feedBack3}>
                            <img className={styles.rec4} src={rec4}></img>

                            <img className={styles.karen} src={karen} />
                            <div className={styles.txt}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit orci, rutrum ut eleifend ac, dapibus nec ante. Etiam mattis est et libero mattis, eget elementum ipsum lacinia.</p>
                            </div>

                            <div className={styles.name}>
                                <p>Karen Kendal</p>
                            </div>
                        </div>

                        <div className={styles.feedBack4}>
                            <img className={styles.rec5} src={rec4}></img>
                            <img className={styles.zoey} src={zoey} />
                            <div className={styles.txt}>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam velit orci, rutrum ut eleifend ac, dapibus nec ante. Etiam mattis est et libero mattis, eget elementum ipsum lacinia.</p>
                            </div>
                            <div className={styles.name}>
                                <p>Zoey Stalker</p>
                            </div>
                        </div>

                    </div>

                    {/* DATA STATE */}
                    <div className={styles.bestCourse}>
                        <div className={styles.header}>
                            <p>Our courses are free!</p>
                        </div>

                        <div className={styles.description}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet tellus dapibus, condimentum velit pharetra, ornare nisl. Praesent in vestibulum sapien. Integer vitae laoreet eros. Duis porttitor enim at leo volutpat, nec tincidunt ante interdum. Fusce pulvinar mollis accumsan. In sollicitudin libero vel est hendrerit luctus. Etiam posuere ultricies diam, nec porttitor tellus porta eu. Duis quis dolor orci. Suspendisse potenti. Fusce sit amet justo eleifend, fringilla arcu sed, porta nisl. Nullam consequat mauris sit amet accumsan malesuada.</p>

                        </div>

                        <div className={styles.carousel}>
                            <img className={styles.leftBtn} src={left_arrow_1} />
                            <img className={styles.rightBtn} src={right_arrow_1} />

                            <div className={styles.subContainer}>
                                {
                                    appState.top_20_courses.map(x => {
                                        return (
                                            <div className={styles.courseCard}>
                                                <img className={styles.thumbnail} src={x.thumbnail} />
                                                <div className={styles.header}>
                                                    <p>{x.title}</p>
                                                </div>

                                                <div className={styles.flexReviews}>
                                                    <img className={styles.studentIcon} src={student_icon}></img>
                                                    <div className={styles.numStudent}>
                                                        <p>{x.num_students}</p>
                                                    </div>
                                                    <img className={styles.heartIcon} src={heart_icon}></img>
                                                    <div className={styles.numLiked}>
                                                        <p>{x.liked}</p>
                                                    </div>
                                                </div>

                                                <div className={styles.divider}>

                                                </div>
                                                <div className={styles.author}>
                                                    <img className={styles.icon} src={x.teacher.avatar}></img>
                                                    <div className={styles.name}>
                                                        <p>{x.teacher.name}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })

                                }
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.partner}>
                    <div className={styles.header}>
                        <p>Our parner</p>
                    </div>

                    <div className={styles.partnerDiv}>
                        <img className={styles.partnerImg} src={udemy}></img>
                        <img className={styles.partnerImg} src={khan}></img>
                        <img className={styles.partnerImg} src={alison}></img>
                        <img className={styles.partnerImg} src={mitocw}></img>
                        <img className={styles.partnerImg} src={skillshare}></img>
                    </div>
                </div>

                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </div>
    );
};

export default Landing;

