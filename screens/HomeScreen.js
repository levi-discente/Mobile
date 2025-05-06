import React, { useState, useEffect } from 'react'
import { FlatList } from 'react-native'
import {
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
  Spinner,
} from 'native-base'
import { MaterialIcons, FontAwesome5, Ionicons } from '@expo/vector-icons'

const API_BASE = 'http://localhost:3000'

export default function HomeScreen() {
  const [categories, setCategories] = useState([])
  const [loadingCats, setLoadingCats] = useState(true)
  const [errorCats, setErrorCats] = useState(null)

  const [doctors, setDoctors] = useState([])
  const [loadingDocs, setLoadingDocs] = useState(true)
  const [errorDocs, setErrorDocs] = useState(null)

  useEffect(() => {
    async function loadCategories() {
      try {
        setLoadingCats(true)
        const res = await fetch(`${API_BASE}/categories`)
        if (!res.ok) throw new Error(`Status ${res.status}`)
        const data = await res.json()
        setCategories(data)
      } catch (err) {
        setErrorCats(err.message)
      } finally {
        setLoadingCats(false)
      }
    }
    loadCategories()
  }, [])

  // Fetch de médicos
  useEffect(() => {
    async function loadDoctors() {
      try {
        setLoadingDocs(true)
        const res = await fetch(`${API_BASE}/doctors`)
        if (!res.ok) throw new Error(`Status ${res.status}`)
        const data = await res.json()
        setDoctors(data)
      } catch (err) {
        setErrorDocs(err.message)
      } finally {
        setLoadingDocs(false)
      }
    }
    loadDoctors()
  }, [])

  return (
    <Box flex={1} bg="white" safeAreaTop>
      {/* HEADER */}
      <HStack bg="primary.600" px={4} py={3} alignItems="center" space={3}>
        <Avatar size="md" source={{ uri: 'https://editor-enciclopedia-public-prd.s3.sa-east-1.amazonaws.com/lde3g9t309deb62codj18cjv6go4' }} />
        <VStack>
          <Text color="white" fontSize="md">Bem vindo!</Text>
          <Text color="white" fontSize="lg" fontWeight="bold">Levi Renato</Text>
        </VStack>
      </HStack>

      <ScrollView flex={1} pb={16}>
        {/* SEARCH */}
        <Box px={4} mt={4} mb={4}>
          <Input
            placeholder="Buscar médico"
            bg="white"
            shadow={2}
            borderRadius="lg"
            InputLeftElement={
              <Icon as={<Ionicons name="search" />} size={5} ml={3} color="gray.400" />
            }
          />
        </Box>

        {/* CATEGORIES */}
        <HStack px={4} justifyContent="space-between" alignItems="center">
          <Heading size="md">Categories</Heading>
          <Text color="primary.600">Show All</Text>
        </HStack>

        {loadingCats && <Spinner mt={4} color="primary.600" />}
        {errorCats && (
          <Text px={4} color="red.500">
            Erro ao carregar categorias: {errorCats}
          </Text>
        )}
        {!loadingCats && !errorCats && (
          <FlatList
            data={categories}
            keyExtractor={item => String(item.id)}
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
                <Center size={12} bg="white" rounded="full" mb={2} shadow={1}>
                  <Icon as={<FontAwesome5 name={item.icon} />} size={6} color="primary.600" />
                </Center>
                <Text fontSize="xs" textAlign="center">{item.name}</Text>
              </Pressable>
            )}
          />
        )}

        {/* TOP DOCTORS */}
        <Heading px={4} mt={4} mb={2} size="md">Top doctors</Heading>

        {loadingDocs && <Spinner mt={4} color="primary.600" />}
        {errorDocs && (
          <Text px={4} color="red.500">
            Erro ao carregar médicos: {errorDocs}
          </Text>
        )}
        {!loadingDocs && !errorDocs && (
          <FlatList
            data={doctors}
            keyExtractor={d => String(d.id)}
            scrollEnabled={false}
            renderItem={({ item }) => {
              const initials = item.name
                .split(' ')
                .map(w => w[0])
                .join('')
                .slice(0, 2)
                .toUpperCase()

              return (
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
                    bg="primary.600"
                    source={item.avatar ? { uri: item.avatar } : undefined}
                  >
                    {!item.avatar && <Text color="white">{initials}</Text>}
                  </Avatar>
                  <VStack flex={1} ml={4} space={1}>
                    <Text fontWeight="bold">{item.name}</Text>
                    <Text fontSize="xs" color="gray.500">{item.specialty}</Text>
                    <HStack alignItems="center" space={1}>
                      <Icon as={<MaterialIcons name="star" />} size={4} color="amber.400" />
                      <Text fontSize="xs" color="gray.500">
                        {item.rating} ({item.reviews} Reviews)
                      </Text>
                    </HStack>
                  </VStack>
                </Box>
              )
            }}
          />
        )}
      </ScrollView>

      {/* BOTTOM NAVIGATION */}
      <Center>
        <HStack
          bg="primary.600"
          justifyContent="space-around"
          alignItems="center"
          height={16}
          width="100%"
          shadow={6}
        >
          <Pressable><Icon as={<Ionicons name="home-outline" />} size="6" color="blueGray.900" /></Pressable>
          <Pressable><Icon as={<FontAwesome5 name="user-nurse" />} size="6" color="white" /></Pressable>
          <Pressable><Icon as={<Ionicons name="calendar-outline" />} size="6" color="white" /></Pressable>
          <Pressable><Icon as={<Ionicons name="person-outline" />} size="6" color="white" /></Pressable>
        </HStack>
      </Center>
    </Box>
  )
}

