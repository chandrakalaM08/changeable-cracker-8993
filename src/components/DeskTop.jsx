
import { useNavigate } from "react-router-dom"
import { AiFillHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import "./DeskTop.css";
import { Button } from "@chakra-ui/button";
export const DeskTop = () => {

    const navigate = useNavigate()

    const handleCartClick = () => {
        navigate("/cart")
    };

    const handleLoginClick = () => {
        navigate("/login")
    };


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
            </Button>
        </div>
    </>
} 