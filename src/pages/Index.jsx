import { Box, Flex, Image, Button, Input, Text, useToast, VStack, useColorMode, IconButton } from "@chakra-ui/react";
import { FaArrowRight, FaLanguage, FaMobileAlt, FaPlus } from "react-icons/fa";
import { useState } from "react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [page, setPage] = useState(1);
  const [language, setLanguage] = useState("EN");
  const toast = useToast();
  const { colorMode, toggleColorMode } = useColorMode();

  const handleEmailSubmit = () => {
    if (email) {
      setPage(2);
    } else {
      toast({
        title: language === "EN" ? "Error" : "错误",
        description: language === "EN" ? "Please enter your email." : "请输入您的邮箱。",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const handleCodeSubmit = () => {
    if (code.length === 6) {
      toast({
        title: language === "EN" ? "Success" : "成功",
        description: language === "EN" ? "Verification successful!" : "验证成功！",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } else {
      toast({
        title: language === "EN" ? "Error" : "错误",
        description: language === "EN" ? "Please enter a 6-digit code." : "请输入6位验证码。",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "EN" ? "CN" : "EN"));
  };

  return (
    <Flex height="100vh" p={4}>
      <Box flex="1">
        <Image src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsYW5kc2NhcGV8ZW58MHx8fHwxNzE0MTQxMDUxfDA&ixlib=rb-4.0.3&q=80&w=1080" />
      </Box>
      <VStack flex="1" spacing={4} align="stretch">
        <IconButton aria-label="Toggle language" icon={<FaLanguage />} onClick={toggleLanguage} alignSelf="flex-end" />
        <IconButton aria-label="Toggle color mode" icon={colorMode === "light" ? <FaMobileAlt /> : <FaPlus />} onClick={toggleColorMode} alignSelf="flex-end" />
        {page === 1 ? (
          <>
            <Input placeholder={language === "EN" ? "Enter your email" : "输入您的邮箱"} value={email} onChange={(e) => setEmail(e.target.value)} />
            <Button rightIcon={<FaArrowRight />} onClick={handleEmailSubmit}>
              {language === "EN" ? "Send Code" : "发送验证码"}
            </Button>
          </>
        ) : (
          <>
            <Input placeholder={language === "EN" ? "Enter 6-digit code" : "输入6位验证码"} value={code} onChange={(e) => setCode(e.target.value)} />
            <Button rightIcon={<FaArrowRight />} onClick={handleCodeSubmit}>
              {language === "EN" ? "Verify" : "验证"}
            </Button>
          </>
        )}
      </VStack>
    </Flex>
  );
};

export default Index;
