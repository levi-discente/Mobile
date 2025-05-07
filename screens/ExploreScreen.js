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
  Image,
} from 'native-base'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'

const exploreCategories = [
  { id: '1', name: 'Resort', icon: 'umbrella-beach' },
  { id: '2', name: 'Homestay', icon: 'home' },
  { id: '3', name: 'Hotel', icon: 'hotel' },
  { id: '4', name: 'Lodge', icon: 'campground' },
  { id: '5', name: 'Villa', icon: 'warehouse' },
  { id: '6', name: 'Apartment', icon: 'building' },
  { id: '7', name: 'Hostel', icon: 'user-friends' },
  { id: '8', name: 'See all', icon: 'th-large' },
]

const popularDestinations = [
  { id: '1', image: 'https://placehold.co/200x150?text=Dest1' },
  { id: '2', image: 'https://placehold.co/200x150?text=Dest2' },
  { id: '3', image: 'https://placehold.co/200x150?text=Dest3' },
]

const recommended = [
  { id: '1', image: 'https://placehold.co/200x150?text=Rec1' },
  { id: '2', image: 'https://placehold.co/200x150?text=Rec2' },
  { id: '3', image: 'https://placehold.co/200x150?text=Rec3' },
]

export default function ExploreScreen() {
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="white" safeAreaTop>
        {/* HEADER + SEARCH + GREETING */}
        <Box bg="violet.700" p={6}>
          <HStack alignItems="center" space={3}>
            {/* logo */}
            <Icon
              as={<MaterialIcons name="travel-explore" />}
              size="8"
              color="white"
            />
            {/* input */}
            <Input
              flex={1}
              placeholder="Search here ..."
              bg="white"
              borderRadius="lg"
              fontSize="md"
              InputRightElement={
                <Icon
                  as={<Ionicons name="search" />}
                  size={5}
                  mr={3}
                  color="gray.400"
                />
              }
            />
          </HStack>

          <HStack
            mt={4}
            alignItems="center"
            justifyContent="space-between"
          >
            <HStack alignItems="center" space={3}>
              <Avatar
                size="md"
                source={{ uri: 'https://placehold.co/40x40' }}
              />
              <VStack>
                <Text color="white" fontSize="sm" fontWeight="bold">
                  Welcome!
                </Text>
                <Text color="white" fontSize="sm">
                  Donna Stroupe
                </Text>
              </VStack>
            </HStack>
            <Pressable>
              <Center size={7} bg="white" rounded="full">
                <Icon
                  as={<Ionicons name="notifications-outline" />}
                  size="4"
                  color="violet.700"
                />
              </Center>
            </Pressable>
          </HStack>
        </Box>

        <ScrollView flex={1} pb={16}>
          {/* CATEGORY */}
          <HStack
            px={4}
            mt={4}
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Category</Heading>
            <Icon
              as={<Ionicons name="menu-outline" />}
              size="6"
              color="black"
            />
          </HStack>
          <FlatList
            data={exploreCategories}
            keyExtractor={item => item.id}
            numColumns={4}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
            renderItem={({ item }) => (
              <VStack alignItems="center" mx={2} p={0} my={2}>
                <Center
                  w={16}
                  h={16}
                  bg="violet.700"
                  rounded="full"
                  shadow={1} p={0}
                  alignItems="center"
                  justifyContent="center"
                >
                  <Icon
                    as={<FontAwesome5 name={item.icon} />}
                    size={7}
                    color="gray.100"
                  />
                </Center>
                <Text fontSize="xs" textAlign="center">
                  {item.name}
                </Text>
              </VStack>
            )}
          />

          {/* POPULAR DESTINATION */}
          <HStack
            px={4}
            mt={6}
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Popular Destination</Heading>
            <Icon
              as={<Ionicons name="menu-outline" />}
              size="6"
              color="black"
            />
          </HStack>
          <FlatList
            horizontal
            data={popularDestinations}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16, paddingVertical: 8 }}
            renderItem={({ item }) => (
              <Pressable mr={4}>
                <Box rounded="lg" overflow="hidden">
                  <Image
                    source={{ uri: item.image }}
                    alt="Destination"
                    size="lg"
                  />
                </Box>
              </Pressable>
            )}
          />

          {/* RECOMMENDED */}
          {/* RECOMMENDED */}
          <HStack
            px={4}
            mt={6}
            justifyContent="space-between"
            alignItems="center"
          >
            <Heading size="md">Recommended</Heading>
          </HStack>

          <FlatList
            data={recommended}
            keyExtractor={item => item.id}
            numColumns={2}
            columnWrapperStyle={{
              justifyContent: 'space-between',
              marginBottom: 16,
            }}
            contentContainerStyle={{
              paddingHorizontal: 16,
              paddingBottom: 16,
            }}
            renderItem={({ item }) => (
              <Pressable
                style={{ flex: 1 }}
                mb={4}
              >
                <Box rounded="lg" overflow="hidden">
                  <Image
                    source={{ uri: item.image }}
                    alt="Recommended"
                    width="100%"
                    height={150}
                  />
                </Box>
              </Pressable>
            )}
          />

        </ScrollView>

        {/* BOTTOM NAVIGATION */}
        <Center>
          <HStack
            bg="violet.700"
            justifyContent="space-around"
            alignItems="center"
            height={16}
            width="100%"
            shadow={6}
          >
            <Pressable>
              <Icon
                as={<Ionicons name="home-outline" />}
                size="6"
                color="white"
              />
              <Text color="white">Home</Text>
            </Pressable>
            <Pressable>
              <Icon
                as={<Ionicons name="compass-outline" />}
                size="6"
                color="yellow.500"
              />
              <Text color="yellow.500">Explore</Text>
            </Pressable>
            <Pressable>
              <Icon
                as={<Ionicons name="search-outline" />}
                size="6"
                color="white"
              />
              <Text color="white">Search</Text>
            </Pressable>
            <Pressable>
              <Icon
                as={<Ionicons name="person-outline" />}
                size="6"
                color="white"
              />
              <Text color="white">Profile</Text>
            </Pressable>
          </HStack>
        </Center>
      </Box>
    </NativeBaseProvider>
  )
}
