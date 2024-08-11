import {
    Button,
    Popover,
    PopoverArrow,
    PopoverCloseButton,
    PopoverContent,
    PopoverHeader,
    PopoverTrigger,
    PopoverFooter
} from '@chakra-ui/react'

export const Profile=()=>{
    const auth=JSON.parse(sessionStorage?.auth)

    const SignOut=()=>{
        sessionStorage?.removeItem('auth')
        window.location.reload(3)
    }


    return(
        <>
            <Popover>
                <PopoverTrigger>
                    <Button>my profile</Button>
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>{auth?.Name}</PopoverHeader>
                    <PopoverHeader>{auth?.DateOfBirth}</PopoverHeader>
                    <PopoverHeader>{auth?.Email}</PopoverHeader>
                    <PopoverHeader>{auth?.Password}</PopoverHeader>
                    <PopoverHeader>{auth?.Mobilenumber}</PopoverHeader>
                    
                </PopoverContent>
                <PopoverFooter>
                    <Button colorScheme='red' onClick={SignOut}>signOut</Button>
                </PopoverFooter>
            </Popover>
        </>

    )
}