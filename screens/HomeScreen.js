import React from 'react'
import { FlatList } from 'react-native'
import {
  NativeBaseProvider,
  Box,
  HStack,
  VStack,
  Input,
  Icon,
  Text,
  Avatar,
  Pressable,
  Heading,
  Center,
  ScrollView,
} from 'native-base'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'

const categories = [
  { id: '1', name: 'Consultation', icon: 'users' },
  { id: '2', name: 'Dentist', icon: 'tooth' },
  { id: '3', name: 'Cardiologist', icon: 'heart' },
  { id: '4', name: 'Hospital', icon: 'hospital' },
  { id: '5', name: 'Emergency', icon: 'exclamation-triangle' },
  { id: '6', name: 'Laboratory', icon: 'flask' },
]

const doctors = [
  {
    id: '1',
    name: 'dr. Olivia Wilson',
    specialty: 'Consultant - Physiotherapy',
    rating: 4.9,
    reviews: 37,
    avatar: 'https://placehold.co/100x100',
  },
  {
    id: '2',
    name: 'dr. Jonathan Patterson',
    specialty: 'Consultant - Internal Medicine',
    rating: 4.9,
    reviews: 37,
    avatar: 'https://placehold.co/100x100',
  },
]

export default function HomeScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
        {/* HEADER */}
        <HStack
          bg="primary.600"
          px={4}
          py={3}
          alignItems="center"
          space={3}
        >
          <Avatar
            size="md"
            source={{ uri: 'https://placehold.co/40x40' }}
          />
          <VStack>
            <Text color="white" fontSize="md">
              Welcome
            </Text>
            <Text color="white" fontSize="lg" fontWeight="bold">
              Dani Martinez
            </Text>
          </VStack>
        </HStack>

        <ScrollView flex={1} pb={16}>
          {/* SEARCH */}
          <Box px={4} mt={4} mb={4}>
            <Input
              placeholder="Search doctor"
              bg="white"
              shadow={2}
              borderRadius="lg"
              InputLeftElement={
                <Icon
                  as={<Ionicons name="search" />}
                  size={5}
                  ml={3}
                  color="gray.400"
                />
              }
            />
          </Box>

          {/* CATEGORIES */}
          <HStack
            px={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Categories</Heading>
            <Text color="primary.600">Show All</Text>
          </HStack>
          <FlatList
            data={categories}
            keyExtractor={item => item.id}
            numColumns={3}
            contentContainerStyle={{ padding: 16 }}
            renderItem={({ item }) => (
              <Pressable
                flex={1 / 3}
                m={2}
                bg="gray.100"
                rounded="lg"
                alignItems="center"
                py={4}
              >
                <Center
                  size={12}
                  bg="white"
                  rounded="full"
                  mb={2}
                  shadow={1}
                >
                  <Icon
                    as={
                      <FontAwesome5 name={item.icon} />
                    }
                    size={6}
                    color="primary.600"
                  />
                </Center>
                <Text fontSize="xs" textAlign="center">
                  {item.name}
                </Text>
              </Pressable>
            )}
          />

          {/* TOP DOCTORS */}
          <Heading px={4} mt={4} mb={2} size="md">
            Top doctors
          </Heading>
          <FlatList
            data={doctors}
            keyExtractor={d => d.id}
            scrollEnabled={true}
            renderItem={({ item }) => (
              <Box
                flexDir="row"
                bg="white"
                mx={4}
                my={2}
                p={4}
                rounded="lg"
                shadow={1}
                alignItems="center"
              >
                <Avatar
                  size="lg"
                  source={{ uri: item.avatar }}
                  mr={4}
                />
                <VStack flex={1} space={1}>
                  <Text fontWeight="bold">{item.name}</Text>
                  <Text fontSize="xs" color="gray.500">
                    {item.specialty}
                  </Text>
                  <HStack alignItems="center" space={1}>
                    <Icon
                      as={<MaterialIcons name="star" />}
                      size={4}
                      color="amber.400"
                    />
                    <Text fontSize="xs" color="gray.500">
                      {item.rating} ({item.reviews} Reviews)
                    </Text>
                  </HStack>
                </VStack>
              </Box>
            )}
          />
        </ScrollView>

        {/* BOTTOM NAVIGATION */}
        <Center >
          <HStack
            bg="primary.600"
            justifyContent="space-around"
            alignItems="center"
            py={0}
            shadow={6}
            width="100%"
            height={16}
          >
            <Pressable>
              <Icon
                as={<Ionicons name="home-outline" />}
                size="6"
                color="blueGray.900"
              />
            </Pressable>
            <Pressable>
              <Icon
                as={<FontAwesome5 name="user-nurse" />}
                size="6"
                color="white"
              />
            </Pressable>
            <Pressable>
              <Icon
                as={<Ionicons name="calendar-outline" />}
                size="6"
                color="white"
              />
            </Pressable>
            <Pressable>
              <Icon
                as={<Ionicons name="person-outline" />}
                size="6"
                color="white"
              />
            </Pressable>
          </HStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  )
}

