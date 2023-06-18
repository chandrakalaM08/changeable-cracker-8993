
import { useNavigate } from "react-router-dom"
import { AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./DeskTop.css";
import { Button } from "@chakra-ui/button";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from '../firebase';
import { signout } from "../redux/AuthReducer/action";
import { useDispatch } from "react-redux";


export const DeskTop = () => {
    let { isAuth } = useSelector((store) => store.AuthReducer)
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const userEmail = localStorage.getItem("loggedInUser")
    const userInfo = JSON.parse(localStorage.getItem("users") || [])

    const getActiveUserName = () => {
        let activeUser = "JD"
        console.log(userEmail)
        console.log(userInfo)
        for (let i = 0; i < userInfo.length; i++) {
            console.log(userInfo[i].userEmail)
            if (userInfo[i][userEmail] !== undefined) {
                activeUser = userInfo[i][userEmail]
            }
        }
        return activeUser
    }

    console.log(getActiveUserName(), " is the active user")

    const handleCartClick = () => {
        navigate("/cart")
    };

    const handleLoginClick = () => {
        if (isAuth === false) {
            navigate("/login")
        }
    };

    const handleLogout = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
            dispatch(signout)
        }).catch((error) => {
            // An error happened.
        });
    }


    console.log(isAuth)

    return <>
        <div style={{ display: "flex", marginLeft: "70px", justifyContent: "space-around", background: "white", width: "100%" }}>
            <Button
                as={'a'}
                fontSize={'xl'}
                fontWeight={400}
                variant={'link'}
                href={'#'}
            >
                <AiOutlineSearch />
            </Button>
            <Button
                as={'a'}
                fontSize={'md'}
                fontWeight={400}
                variant={'link'}
                href={'#'}>
                <AiFillHeart color='red' />
            </Button>

            <Button
                fontSize={'md'}
                fontWeight={400}
                variant={'link'}
                onClick={handleCartClick}>
                Cart <AiOutlineShoppingCart />
            </Button>
            {isAuth ? <><button style={{ fontWeight: "600" }}>{getActiveUserName()}</button><Button
                onClick={handleLogout}
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'md'}
                fontWeight={600}
                color={'white'}
                bg={'pink.500'}
                href={'#'}
                _hover={{
                    bg: 'pink.200',
                }}>
                Sign Out
            </Button>
            </>
                :
                <Button
                onClick={handleLoginClick}
                as={'a'}
                display={{ base: 'none', md: 'inline-flex' }}
                fontSize={'md'}
                fontWeight={600}
                color={'white'}
                bg={'pink.500'}
                href={'#'}
                _hover={{
                    bg: 'pink.200',
                }}>
                    Sign In 
                </Button>}
        </div>
    </>
} 